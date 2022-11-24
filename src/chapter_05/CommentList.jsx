import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이민재",
    comment: "안녕하세요. 소플입니다.",
  },
  {
    name: "박지연",
    comment: "안녕하.",
  },
  {
    name: "김뒤",
    comment: "안요. 소플입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
