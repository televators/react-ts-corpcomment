// import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../types/types";
import React from "react";

const FeedbackListItem = ( { feedbackItem, cssIndex }: FeedbackItemProps ) => {
  const badgeLetter =
    ( ! feedbackItem.badgeLetter || feedbackItem.badgeLetter.length < 1 )
      ? feedbackItem.company[0]
      : feedbackItem.badgeLetter;

  return (
    <li className="feedback" style={{ '--index': `${ cssIndex }` } as React.CSSProperties}>
      <button>
        <div className="icon--triangle"></div>
        <span>{ feedbackItem.upvoteCount }</span>
      </button>

      <div>
        <p>{ badgeLetter }</p>
      </div>

      <div>
        <p>{ feedbackItem.company }</p>
        <p>{ feedbackItem.text }</p>
      </div>

      <p>{ feedbackItem.daysAgo }</p>
    </li>
  );
}

export default FeedbackListItem;
