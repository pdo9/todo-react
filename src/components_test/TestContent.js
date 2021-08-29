import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import PostFilter from './PostFilter';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService';
import { getPageCount } from './utils/pages';
import Pagination from './UI/pagination/Pagination';
import Loader from './UI/loader/Loader';
import CustomModal from './UI/modal/CustomModal';
import CustomButton from './UI/button/CustomButton';
// import CustomInput from './UI/input/CustomInput';
// import CustomSelect from './UI/select/CustomSelect';

export default function TestContent() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: '', query: '' });
  const [modal, setModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    // setTimeout(async () => {
    //   const posts = await PostService.getAll();
    //   console.log(posts);
    //   setPosts(posts);
    // }, 900);
    const response = await PostService.getAll(limit, page);
    console.log('response:', response);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  React.useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    console.log('changePage:', page);
  };

  return (
    <div className='App'>
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
      {postError && <h1>Произошла ошибка при загрузке постов: {postError}</h1>}
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
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}
