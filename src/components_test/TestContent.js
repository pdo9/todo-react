import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import PostFilter from './PostFilter';
import { usePosts } from './hooks/usePosts';
import CustomModal from './UI/modal/CustomModal';
import CustomButton from './UI/button/CustomButton';
//import axios from 'axios';
import PostService from './API/PostService';
import Loader from './UI/loader/Loader';
// import CustomSelect from './UI/select/CustomSelect';
// import CustomInput from './UI/input/CustomInput';

export default function TestContent() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: '', query: '' });
  const [modal, setModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      console.log(posts);
      setPosts(posts);
      setIsPostsLoading(false);
    }, 900);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <CustomButton onClick={fetchPosts}>Get posts</CustomButton>
      <CustomButton
        style={{ marginTop: '30px' }}
        onClick={() => setModal(true)}
      >
        Создать пост
      </CustomButton>
      <CustomModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} remove={removePost} />
      </CustomModal>
      <hr style={{ margin: '15px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={'Список постов'}
          remove={removePost}
        />
      )}
    </div>
  );
}
