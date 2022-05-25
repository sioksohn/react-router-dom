import QuoteForm from "../components/quotes/QuoteForm";
import { EnteredQuote } from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData: EnteredQuote) => {
    console.log(quoteData);
  };
  return <QuoteForm isLoading={false} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
