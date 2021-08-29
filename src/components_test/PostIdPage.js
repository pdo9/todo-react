import React from 'react';
import { useParams } from 'react-router';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';
import Loader from './UI/loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = React.useState({});
  const [fetchPostBidId, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  React.useEffect(() => {
    fetchPostBidId();
  }, []);

  return (
    <div>
      <h1>id={params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
