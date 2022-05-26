import React, { useRef, useEffect } from "react";
import classes from "./NewCommentForm.module.css";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

type NewComment = {
  quoteId: string;
  onAddedComment: any;
};
export type EnteredComment = { commentData: { text: string }; quoteId: string };

const NewCommentForm = ({ quoteId, onAddedComment }: NewComment) => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = commentTextRef.current!.value;
    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId: quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
