import React from 'react';
import CustomButton from './UI/button/CustomButton';

const PostItem = (props) => {
  // console.log(props);

  return (
    <div className='todo-item'>
      <div>
        <strong>
          {props.number} {props.post.title} [id={props.post.id}]
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post_button'>
        <CustomButton onClick={() => props.remove(props.post)}>
          Удалить
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
