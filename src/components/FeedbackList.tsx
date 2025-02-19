import { useEffect, useState } from "react";
import FeedbackListItem from "./FeedbackListItem";
import { FeedbackItem } from "../types/types";
import { MoonLoader } from "react-spinners";

interface FeedbackResponse {
  feedbacks: FeedbackItem[];
}

const FeedbackList = () => {
  const [isLoading, setIsLoading] = useState( true );
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[] | null>( [] );

  useEffect( () => {
    async function getFeedbacks(): Promise<FeedbackResponse> {
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
      .catch( error => console.error( error ) )
      .finally( () => setIsLoading( false ) );
  }, [] );

  return (
    <ol className={`feedback-list ${ ( ! feedbackItems || feedbackItems.length === 0 ) ? 'feedback-list--empty' : '' }`}>
      { isLoading ? (
        <MoonLoader
          color="#695390"
          size={100}
          aria-label="Loading icon"
          cssOverride={{
            marginTop: '3rem',
          }}
        />
      ) : (
        <>
          { feedbackItems && feedbackItems.map( ( feedbackItem, index ) => (
            <FeedbackListItem key={ feedbackItem.id } feedbackItem={ feedbackItem } cssIndex={ index } />
          ) ) }
          { ! feedbackItems && (
            <h4 className="feedback-list__no-data-message">No feedback yet. Submit one above!</h4>
          ) }
        </>
      ) }
    </ol>
  );
}

export default FeedbackList;
