import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import currBlogSlice from "../../slices/currBlogSlice";
import utilitySlice from "../../slices/utilitySlice";
import { sleepInMilliseconds } from "../../helpers/sleepInMilliseconds";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './blogStyle.css';
import newImg from '../../assets/images/blog-bg.jpg';


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

  return (
    <main className="">
      {isLoading ? (
        <h1 className="animate-bounce">Loading</h1>
      ) : (
        <main>
          <Link to="/blogs" className="myButton">Back</Link>
          <br/>
          <main className="mr-80 ml-80">

            <h1 className="flex justify-center items-center text-4xl">jkfhkjsdiusgbkusb</h1>
            <br/>
            <main className="">
            <img className="h-96 w-screen opacity-85" src={newImg}/>
            </main>
            <br/>
            <main className="flex justify-center items-center text-xl">
              <p className="text-justify">
              What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, wr
              </p>
            </main>
            
          </main>
        </main>
      )}
    </main>
  );
};

export default CurrBlog;
