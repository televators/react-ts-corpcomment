import { useEffect, useState } from "react";
import FeedbackListItem from "./FeedbackListItem";
import { FeedbackItem } from "../types/types";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[] | null>( [] );

  useEffect( () => {
    async function getFeedbacks(): Promise<FeedbackItem[]> {
      try {
        const response = await fetch( 'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks' );

        // Is response in the happy range (200-299)?
        if ( ! response.ok ) {
          throw new Error( `Request failed. Status: ${ response.status }` );
        }

        const contentType = response.headers.get( 'Content-Type' );

        if ( ! contentType || ! contentType.includes( 'application/json' ) ) {
          throw new TypeError( `Non-JSON response type: ${ contentType }` );
        }

        return await response.json();
      } catch ( error ) {
        console.error( 'Error fetching feedback items:', error );
        throw error;
      }
    }

    getFeedbacks()
      .then( data => {
        console.log( data );
        setFeedbackItems( data.feedbacks );
      } )
      .catch( error => console.error( error ) );
  }, [] );

  return (
    <ol className="feedback-list">
      { feedbackItems.map( ( feedbackItem ) => (
        <FeedbackListItem key={ feedbackItem.id } feedbackItem={ feedbackItem } />
      ) ) }
    </ol>
  );
}

export default FeedbackList;
