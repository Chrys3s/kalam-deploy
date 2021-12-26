import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaComment, FaThumbsUp, FaUserAlt } from "react-icons/fa";
import tempImg from "../../assets/images/code.gif";
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
    <div className="container">
      <div
        className="row"
        style={{
          borderRadius: "18px",
          border: "0.4px solid rgba(33,37,41,0.18)",
          margin: "4px",
          padding: "5px",
          height: "259px",
        }}
      >
        <div
          className="col"
          style={{
            borderRight: "0.4px solid rgba(33, 37, 41, 0.27)",
            padding: "0px 15px",
          }}
        >
          <Link
            className="d-flex"
            to={`/blogs/${uniqueId}`}
            style={{
              fontSize: "33px",
              margin: "15px 0px 0px 5px",
              padding: "3px",
            }}
          >
            <br />
            <strong>{blogTitle}</strong>
            <br />
          </Link>
          <p
            style={{
              margin: "0px 0px 0px 5px",
              height: "101px",
              padding: "0px",
              borderTopStyle: "none",
            }}
          >
            <br />
            <strong style={{ fontSize: "1.2em" }}>
              {content.slice(0, 200)}...
            </strong>
            <br />
            <div style={{ fontSize: "1.1em", marginTop: "10px" }}>
              <em>Posted by&nbsp;</em>
              <a href="#">
                <em>{authorDetails.authorName}</em>
              </a>
              <em>&nbsp;on {dateCreated.slice(0, 10)}</em>
              <br />
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between">
                <span>Web&nbsp;</span>
                <span>Security&nbsp;</span>
                <span>Lou&nbsp;</span>
              </div>
              <div className="d-flex justify-content-end">
                Likes, Comment, Views
              </div>
            </div>
          </p>
        </div>
        <div className="col-4" style={{ padding: "7px" }}>
          <img
            className="img-fluid border rounded-0 border-light shadow-sm h-60 ml-4"
            src={tempImg}
          />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
