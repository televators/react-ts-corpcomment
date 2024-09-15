import React, { useState } from "react";
import { MAX_CHAR_COUNT } from "../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState( '' );
  const characterCount = MAX_CHAR_COUNT - text.length;
  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    if ( event.target.value.length > MAX_CHAR_COUNT ) return;

    setText( event.target.value );
  };

  return (
    <form className="form">
      <textarea
        name="feedback-textarea"
        id="feedback-textarea"
        placeholder="Enter your feedback here and remember to #tag the company"
        spellCheck={ false }
        maxLength={ MAX_CHAR_COUNT }
        value={ text }
        onChange={ handleChange }
      />
      <label htmlFor="feedback-textarea">Enter your feedback here and remember to #tag the company</label>

      <div>
        <p className="u-italic">{ characterCount }</p>

        <button>
          <span>Submit</span>
        </button>
      </div>

    </form>
  );
}

export default FeedbackForm;
