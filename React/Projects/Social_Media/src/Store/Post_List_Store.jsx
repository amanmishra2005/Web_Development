// import { useMemo } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payloads.postId,
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payloads.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payloads, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [],
    // DEFAULT_POST_LIST,
  );

  const addPost = useCallback(
    (userId, postTitle, postBody, reactions, tags) => {
      dispatchPostList({
        type: "ADD_POST",
        payloads: {
          id: Date.now(),
          title: postTitle,
          body: postBody,
          reactions: reactions,
          userId: userId,
          tags: tags,
        },
      });
    },
    [dispatchPostList],
  );

  // const addPost = (userId, postTitle, postBody, reactions, tags) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payloads: {
  //       id: Date.now(),
  //       title: postTitle,
  //       body: postBody,
  //       reactions: reactions,
  //       userId: userId,
  //       tags: tags,
  //     },
  //   });
  // };

  const addInitialPosts = useCallback(
    (posts) => {
      dispatchPostList({
        type: "ADD_INITIAL_POSTS",
        payloads: {
          posts,
        },
      });
    },
    [dispatchPostList],
  );

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payloads: {
  //       posts,
  //     },
  //   });
  // };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payloads: {
          postId,
        },
      });
    },
    [dispatchPostList],
  );

  // const deletePost = (postId) => {
  //   dispatchPostList({
  //     type: "DELETE_POST",
  //     payloads: {
  //       postId,
  //     },
  //   });
  // };

  // const arr = [2, 40, 3, 44, 32, 45, 21, 43, 55, 89, 98, 10, 12];
  // const sortedArr = useMemo(() => arr.sort(), [arr]);

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "Going to Mumbai",
//     body: "Hii Friends, I am going to Mumbai for my Vacations. Hope to enjoy a lot. Peace Out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["Vacations", "Mumbai", "Enjoying"],
//   },
//   {
//     id: 2,
//     title: "Pass ho gye Bhai",
//     body: "4 saal k masti k baad bhi ho gye pass. Hard to Beleive",
//     reactions: 15,
//     userId: "user-2",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;
