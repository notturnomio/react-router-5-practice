import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const spanishInputRef = useRef();
  const englishInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEsp = spanishInputRef.current.value;
    const enteredEng = englishInputRef.current.value;

    if (enteredEsp.split(" ").join("") && enteredEng.split(" ").join("")) {
      props.onAddQuote({ esp: enteredEsp, eng: enteredEng });
    }
  }

  const formFocusedHandler = () => {
    console.log("Focus!");
    setIsEntering(true);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          `Are you sure you want to go to "${location.pathname}" without saving? Your data will be lost.`
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <div className={classes.control}>
              <label htmlFor="spanish">Quote in Spanish</label>
              <textarea id="spanish" rows="5" ref={spanishInputRef}></textarea>
            </div>
            <label htmlFor="english">Translation in English</label>
            <textarea
              type="text"
              id="english"
              rows="5"
              ref={englishInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setIsEntering(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
