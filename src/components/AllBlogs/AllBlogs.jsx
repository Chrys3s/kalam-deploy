import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaComment, FaThumbsUp, FaUserAlt } from "react-icons/fa";
import tempImg from "../../assets/images/blog-bg.jpg";
import "./blogStyle.css";

const AllBlogs = (props) => {
  const numberOfLikes = props.data.likes.length;
  const authorDetails = props.data.author;
  const blogTitle = props.data.blogTitle;
  const comments = props.data.comments;
  const content = props.data.content;
  const dateCreated = props.data.dateCreated;
  const imgUrl = props.data.imgUrl;
  const lastModified = props.data.lastModified;
  const tags = props.data.tags;
  const views = props.data["views"];
  const uniqueId = props.data["_id"];
  return (
    <main
      className="m-10 bg-yellow-900 py-4 px-2"
      style={{ minWidth: "500px", width: "1000px", height: "200px" }}
    >
      <main class="flex flex-col justify-between bg-yellow-700">
        <main class="flex flex-row m-2">
          <main class="bg-blue-400 flex justify-center items-center mx-1">
            <main class="flex flex-wrap m-2">
              <main class="bg-red-500 justify-center items-center px-36">
                <span>{props.data.blogTitle}</span>
              </main>
              <main class="bg-red-700 px-20">
                {props.data.author.authorName}
              </main>
              <main class="bg-yellow-500 px-20">
                {props.data.dateCreated.slice(0, 10)}
              </main>
            </main>
          </main>
          <main class="bg-yellow-600 justify-center items-center px-52">
            <img src={props.data.imgUrl} />
          </main>
        </main>
        <main class="bg-yellow-500 justify-center items-center m-1">
          <h2 class="flex justify-center items-center">
            {props.data.content.length > 100
              ? props.data.content.slice(0, 100)
              : props.data.content}
          </h2>
        </main>
        <main class="bg-red-700 flex flex-row justify-between items-center mt-1 mr-1 ml-1">
          <main class="flex flex-row">
            {props.data.tags.map((tag) => {
              return <h2 class="px-2">{tag}</h2>;
            })}
          </main>
          <main class="flex flex-row justify-end m-2">
            <main class="px-2">👁 {props.data.views}</main>
            <main class="px-2">❤ {props.data.likes.length}</main>
            <main class="px-2">✉ {props.data.comments.length}</main>
          </main>
        </main>
        <main class="bg-blue-400 flex justify-end mx-1">
          <button class="mx-4">
            <Link to={`/blogs/${props.data["_id"]}`}>Read More</Link>
          </button>
        </main>
      </main>
    </main>
  );
};

export default AllBlogs;
