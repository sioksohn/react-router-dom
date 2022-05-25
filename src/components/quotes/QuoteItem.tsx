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
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

export default QuoteItem;
