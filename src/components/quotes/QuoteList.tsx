import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
type Quote = {
  id: string;
  author: string;
  text: string;
};
const QuoteList = ({ quotes }: { quotes: Quote[] }) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
