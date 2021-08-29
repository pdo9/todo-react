import React from 'react';
import CustomInput from './UI/input/CustomInput';
import CustomButton from './UI/button/CustomButton';

const PostForm = ({ create }) => {
  const [post, setPost] = React.useState({ id: 0, title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ id: 0, title: '', body: '' });
  };

  return (
    <form style={{ margin: '20px' }}>
      <CustomInput
        type='text'
        placeholder='Название поста'
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      ></CustomInput>
      <CustomInput
        type='text'
        placeholder='Описание поста'
        //ref={bodyInputRef}
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      ></CustomInput>
      <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
    </form>
  );
};

export default PostForm;
