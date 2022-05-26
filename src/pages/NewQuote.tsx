import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { EnteredQuote } from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest } = useHttp(addQuote);
  const history = useHistory();
  const addQuoteHandler = (quoteData: EnteredQuote) => {
    sendRequest(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
