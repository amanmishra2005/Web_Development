import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post_List_Store";
import WelcomeMessage from "./Welcome_Message";
import LoadingSpinner from "./Loading_Spinner";

const PostList = () => {
  const { postList, /*addInitialPosts*/ fetching } = useContext(PostListData);

  // const [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {
  //     console.log("Cleaning up UseEffects");
  //     controller.abort();
  //   };
  // }, []);

  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  // const handleGetPostsClicked = () => {
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then(data => {
  //     addInitialPosts(data.posts);
  //   });
  // };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage /*onGetPostsClicked={handleGetPostsClicked}*/ />
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
