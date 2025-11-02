import React from 'react';
import Comment, { CommentList } from './Comment';

const commentData = [
  {
    name: 'Shadab Akhtar',
    text: 'Lorem ipsum text for dummy comments data',
    replies: [
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [
          {
            name: 'Shadab Akhtar',
            text: 'Lorem ipsum text for dummy comments data',
            replies: [
              {
                name: 'Shadab Akhtar',
                text: 'Lorem ipsum text for dummy comments data',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Shadab Akhtar',
    text: 'Lorem ipsum text for dummy comments data',
    replies: [
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
    ],
  },
  {
    name: 'Shadab Akhtar',
    text: 'Lorem ipsum text for dummy comments data',
    replies: [
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
    ],
  },
  {
    name: 'Shadab Akhtar',
    text: 'Lorem ipsum text for dummy comments data',
    replies: [
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
      {
        name: 'Shadab Akhtar',
        text: 'Lorem ipsum text for dummy comments data',
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="pt-8 pl-20 w-[880px]">
      <h1 className="font-bold text-2xl">Comment Section: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
