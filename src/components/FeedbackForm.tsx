const FeedbackForm = () => {
  return (
    <form className="form">
      <textarea name="feedback-textarea" id="feedback-textarea" placeholder="Enter your feedback here and remember to #tag the company" spellCheck={ false } maxLength={ 150 } />
      <label htmlFor="feedback-textarea">Enter your feedback here and remember to #tag the company</label>

      <div>
        <p className="u-italic">150</p>

        <button>
          <span>Submit</span>
        </button>
      </div>

    </form>
  );
}

export default FeedbackForm;
