import React from 'react';
//import Counter from './Counter';
//import PostItem from './PostItem';
import PostList from './PostList';
import CustomInput from './UI/input/CustomInput';
import CustomButton from './UI/button/CustomButton';

export default function TestContent() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'titleHeader 1', body: 'post text 1' },
    { id: 2, title: 'titleHeader 2', body: 'post text 2' },
    { id: 3, title: 'titleHeader 3', body: 'post text 3' },
    { id: 4, title: 'titleHeader 4', body: 'post text 4' },
    { id: 5, title: 'titleHeader 5', body: 'post text 5' },
  ]);

  // const [title, setTitle] = React.useState('');
  // const [body, setBodyText] = React.useState('');
  //const bodyInputRef = React.useRef();
  const [post, setPost] = React.useState({ id: 0, title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();

    // const newPost = {
    //   id: Date.now(),
    //   title: title,
    //   body: body,
    // };
    setPosts([...posts, { ...post, id: Date.now() }]);

    setPost({ id: 0, title: '', body: '' });
  };

  return (
    <div className='App'>
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
      <PostList posts={posts} title={'Список постов22'} />
    </div>
  );
}
