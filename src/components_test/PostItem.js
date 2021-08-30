import React from 'react';
import CustomButton from './UI/button/CustomButton';
import { useHistory } from 'react-router';
// import { useHistory } from 'react-router-dom';

const PostItem = (props) => {
  const router = useHistory();

  return (
    <div className='todo-item'>
      <div>
        <strong>
          {props.post.id}
          {'. '} {props.post.title} [id={props.post.id}]
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post_button'>
        <CustomButton onClick={() => router.push('/posts/' + props.post.id)}>
          Открыть
        </CustomButton>
        <CustomButton onClick={() => props.remove(props.post)}>
          Удалить
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
