import { useReducer, useCallback } from "react";
import { EnteredQuote } from "../components/quotes/QuoteForm";

type Action =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: any }
  | { type: "ERROR"; errorMessage: string };

interface State {
  data: null | any;
  error: null | any;
  status: null | any;
}

function httpReducer(state: State, action: Action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

function useHttp(
  requestFunction: (args: any) => void,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData?: EnteredQuote | string) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error: any) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
