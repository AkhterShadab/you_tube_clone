/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 my-2">
      <img
        alt="user image"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="w-12 h-12"
      />
      <div className="pt-1 px-2">
        <p className="font-bold">{name} Name</p>
        <p>{text} text</p>
      </div>
    </div>
  );
};

export default Comment;
