import React, { useState } from 'react';
import InputForm from './InputForm';
import PostList from './PostList';
//import './TodoApp.css';

function PostApp() {
  const now = new Date().toLocaleDateString();

  const initialPostList = [
    { id: 1, title:'title1', text: 'text1', date: now },
    { id: 2, title:'title2', text: 'text2', date: now },
  ];

  const [postList, setPostList] = useState(initialPostList);

  const onRemovePost = (post) => {
    setPostList(postList => postList.filter(item => item !== post));
  }

  const onFormSubmit = (title, text, datetime) => {
    const post = {
      id: Math.random(),
      title: title,
      text: text,
      date: now
    };

    setPostList([...postList, post]);
  }

  return (
    <div >
      <div >
        <InputForm onFormSubmit={onFormSubmit} />
        <PostList 
          postList={postList} 
          onRemovePost={onRemovePost}/>
      </div>
    </div>
  );
}

export default PostApp;