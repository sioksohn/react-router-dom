import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  { id: "q1", author: "Aiden", text: "엄마는 히미세요." },
  { id: "q2", author: "Brandon", text: "I love you most!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
