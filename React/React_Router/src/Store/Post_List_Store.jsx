import { useEffect } from "react";
import { useState } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  // addInitialPosts: () => {},
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
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payloads: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payloads: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payloads: {
        postId,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{ postList, fetching, addPost, /*addInitialPosts,*/ deletePost }}
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
