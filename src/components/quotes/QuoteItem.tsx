import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

type QuteItemProps = { key: string; id: string; author: string; text: string };

const QuoteItem = (props: QuteItemProps) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
