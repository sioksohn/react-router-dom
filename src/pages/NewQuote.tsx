import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { EnteredQuote } from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData: EnteredQuote) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
