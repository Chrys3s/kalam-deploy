import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import currBlogSlice from "../../slices/currBlogSlice";
import utilitySlice from "../../slices/utilitySlice";
import { sleepInMilliseconds } from "../../helpers/sleepInMilliseconds";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CurrBlog = ({ match, location }) => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState();
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    dispatch(currBlogSlice.actions.resetBlog());
    dispatch(utilitySlice.actions.setDisplayThisBlog(false));
    const fetchData = async () => {
      const res = await axios.request({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/v1/blogs/blog/${id}`,
      });
      dispatch(currBlogSlice.actions.setBlog(res.data.data[0]));
      await sleepInMilliseconds(2500);
      dispatch(utilitySlice.actions.setDisplayThisBlog(true));
      return;
    };
    fetchData();
  }, []);
  
    let isLoading = useSelector((state) => state.utilitySlice.displayThisBlog);
    const thisBlog = useSelector((state) => state.currBlogSlice.blogInfo);  
    isLoading = false;
    console.log(thisBlog.tags);

  return (
    <main className="flex justify-center items-center">
      {isLoading ? (
        <h1 className="animate-bounce">Loading</h1>
      ) : (
        <main>
          <Link to="/blogs">Back</Link>
          <main>
          <h1>{thisBlog.blogTitle}</h1>
          <p>{thisBlog.content}</p>
          <h4>{thisBlog.imgUrl}</h4>
          <h4>{thisBlog.likes && thisBlog.likes.length}</h4>
          {thisBlog.tags && (
            <ul>
              {thisBlog.tags.map((tag) => {
                return <li key={Date.now().toString() + tag}>{tag}</li>;
              })}
            </ul>
          )}
          <h3>Views: {thisBlog.views}</h3>
          <h2>{thisBlog.author && thisBlog.author.authorName}</h2>
          <h2>{thisBlog.author && thisBlog.author.authorEmail}</h2>
          <h2>{thisBlog.author && thisBlog.author.authorId}</h2>
          <h2>{thisBlog.dateCreated}</h2>
          <h2>{thisBlog.lastModified}</h2>
          <h2>{thisBlog.comments && thisBlog.comments.length}</h2>
          </main>
        </main>
      )}
    </main>
  );
};

export default CurrBlog;
