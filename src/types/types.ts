export type FeedbackItem = {
  id:          number;
  upvoteCount: number;
  badgeLetter: string;
  company:     string;
  text:        string;
  daysAgo:     number;
};

export type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};
