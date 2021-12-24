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
    <div className="bg-yellow-300 mb-2 blog-box mt-5 rounded-lg">
      <div className="flex justify-between mb-2">
        <div className="bg-yellow-200 pl-10 p-4">
          <div className="flex justify-center mb-2">{props.data.blogTitle}</div>
          <div className="flex justify-between">
            <div>{props.data.author.authorName}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>{props.data.dateCreated}</div>
          </div>
        </div>
          <img src={tempImg} className="w-46 h-36"/>
      </div>
      <div>
        <div className="bg-yellow-500 p-4">
          {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, impedit
        quae? Voluptatibus soluta iste unde impedit esse! Minus, quis quam, vel
        sed molestias expedita obcaecati ipsam soluta velit unde cum! ${props.data.content}`
            .length > 250
            ? `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, impedit
        quae? Voluptatibus soluta iste unde impedit esse! Minus, quis quam, vel
        sed molestias expedita obcaecati ipsam soluta velit unde cum! ${props.data.content}`.slice(
                0,
                251
              ) + "..."
            : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, impedit
        quae? Voluptatibus soluta iste unde impedit esse! Minus, quis quam, vel
        sed molestias expedita obcaecati ipsam soluta velit unde cum! ${props.data.content}`}
        </div>
        <Link to={`/blogs/${uniqueId}`}>Read More</Link>
        <div className="flex">
          <div>
            {props.data.tags.map((tag) => {
              return (
                <div className="inline">
                  <div className="bg-red-100 inline">{tag}</div>
                  <div className="inline mr-8 triangle"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-yellow-100 mb-2 blog-box p-2">
    //   <div className="flex justify-between">
    //     <div>
    //       <div>{props.data.blogTitle}</div>
    //       <div className="flex justify-between">
    //         <div>{props.data.author.authorName}</div>
    //         <div>{props.data.dateCreated}</div>
    //       </div>
    //     </div>
    //     <div className="bg-yellow-500">
    //       <img src={tempImg} className="h-1/2"/>
    //     </div>
    //   </div>
    //   <div>
    //     Remaining
    //   </div>
    // </div>
  );
};

export default AllBlogs;
