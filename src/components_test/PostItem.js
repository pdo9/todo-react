import React from 'react';

const PostItem = (props) => {
  // console.log(props);

  return (
    <div className='post'>
      <div className='post_content'>
        <strong>
          {props.number} {props.post.title} [id={props.post.id}]
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post_button'>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
