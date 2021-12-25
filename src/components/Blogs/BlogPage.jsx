import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import blogDataSlice from "../../slices/blogDataSlice";
import utilitySlice from "../../slices/utilitySlice";
import { useSelector } from "react-redux";
import AllBlogs from "../AllBlogs/AllBlogs";
import LoadingEffect from "../AllBlogs/LoadingEffect";
import { sleepInMilliseconds } from "../../helpers/sleepInMilliseconds";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import "./BlogPage.css";

const BlogPage = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    dispatch(blogDataSlice.actions.resetAllBlogs());
    dispatch(utilitySlice.actions.setDisplayBlogs(false));
    document.title = "कलम 🖋 - Blogs";
    const fetchData = async () => {
      const res = await axios.request({
        timeout: 20000,
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/v1/blogs/`,
      });
      dispatch(blogDataSlice.actions.storeAllBlogs(res.data.data.reverse()));
      await sleepInMilliseconds(1000);
      dispatch(utilitySlice.actions.setDisplayBlogs(true));
    };
    fetchData();
  }, [flag]);

  const blogDataFetched = useSelector((state) => state.blogDataSlice.blogsData);
  const isDisplayBlogs = useSelector(
    (state) => state.utilitySlice.displayBlogs
  );
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <main>
      {isDisplayBlogs ? (
        <main className="flex flex-col items-center">
          {blogDataFetched.length === 0 ? (
            <h1>No Blogs Found</h1>
          ) : (
            blogDataFetched.map((curr) => {
              return <AllBlogs key={curr._id} data={curr} />;
            })
          )}
          <div className="inline fixed bottom-0 right-0">
            <div className="circle">
              <Link to="/create/blog">
                <FaPlusCircle />
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex justify-center items-center h-screen w-screen">
          <LoadingEffect />
        </main>
      )}
    </main>
  );
};

export default BlogPage;
