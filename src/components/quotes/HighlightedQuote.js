import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.esp}</p>
      <figcaption>{props.eng}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
