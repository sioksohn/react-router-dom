import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

type QuoteParam = {
  quoteId: string;
};

const QuoteDetail = () => {
  const { quoteId } = useParams<QuoteParam>();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
