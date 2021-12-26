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
          {/* <Link to="/blogs">Back</Link> */}
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











          {/* <header
            className="masthead ll"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                  <div className="post-heading">
                    <h1 className="h1">
                      Man must explore, and this is exploration at its greatest
                    </h1>
                    <h2 className="subheading">
                      Problems look mighty small from 150 miles up
                    </h2>
                    <span className="meta">
                      Posted by&nbsp;<a href="#">Start Bootstrap</a>&nbsp;on
                      August 24, 2018
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                  <p>
                    Never in all their history have men been able truly to
                    conceive of the world as one: a single sphere, a globe,
                    having the qualities of a globe, a round earth in which all
                    the directions eventually meet, in which there is no center
                    because every point, or none, is center — an equal earth
                    which all men occupy as equals. The airman's earth, if free
                    men make it, will be truly round: a globe in practice, not
                    in theory.
                  </p>
                  <p>
                    Science cuts two ways, of course; its products can be used
                    for both good and evil. But there's no turning back from
                    science. The early warnings about technological dangers also
                    come from science.
                  </p>
                  <p>
                    What was most significant about the lunar voyage was not
                    that man set foot on the Moon but that they set eye on the
                    earth.
                  </p>
                  <p>
                    A Chinese tale tells of some men sent to harm a young girl
                    who, upon seeing her beauty, become her protectors rather
                    than her violators. That's how I felt seeing the Earth for
                    the first time. I could not help but love and cherish her.
                  </p>
                  <p>
                    For those who have seen the Earth from space, and for the
                    hundreds and perhaps thousands more who will, the experience
                    most certainly changes your perspective. The things that we
                    share in our world are far more valuable than those which
                    divide us.
                  </p>
                  <h2 className="section-heading">Heading</h2>
                  <p>
                    There can be no thought of finishing for ‘aiming for the
                    stars.’ Both figuratively and literally, it is a task to
                    occupy the generations. And no matter how much progress one
                    makes, there is always the thrill of just beginning.
                  </p>
                  <p>
                    There can be no thought of finishing for ‘aiming for the
                    stars.’ Both figuratively and literally, it is a task to
                    occupy the generations. And no matter how much progress one
                    makes, there is always the thrill of just beginning.
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      The dreams of yesterday are the hopes of today and the
                      reality of tomorrow. Science has not yet mastered
                      prophecy. We predict too much for the next year and yet
                      far too little for the next ten.
                    </p>
                  </blockquote>
                  <p>
                    Spaceflights cannot be stopped. This is not the work of any
                    one man or even a group of men. It is a historical process
                    which mankind is carrying out in accordance with the natural
                    laws of human development.
                  </p>
                  <h2 className="section-heading">Reaching for the Stars</h2>
                  <p>
                    As we got further and further away, it [the Earth]
                    diminished in size. Finally it shrank to the size of a
                    marble, the most beautiful you can imagine. That beautiful,
                    warm, living object looked so fragile, so delicate, that if
                    you touched it with a finger it would crumble and fall
                    apart. Seeing this has to change a man.
                  </p>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/post-sample-image.jpg"
                    />
                  </a>
                  <span className="caption text-muted">
                    To go places and do things that have never been done before
                    – that’s what living is all about.
                  </span>
                  <p>
                    Space, the final frontier. These are the voyages of the
                    Starship Enterprise. Its five-year mission: to explore
                    strange new worlds, to seek out new life and new
                    civilizations, to boldly go where no man has gone before.
                  </p>
                  <p>
                    As I stand out here in the wonders of the unknown at Hadley,
                    I sort of realize there’s a fundamental truth to our nature,
                    Man must explore, and this is exploration at its greatest.
                  </p>
                  <p>
                    <span>Placeholder text by&nbsp;</span>
                    <a href="http://spaceipsum.com">Space Ipsum</a>
                    <span>&nbsp;Photographs by&nbsp;</span>
                    <a href="https://www.flickr.com/photos/nasacommons/">
                      NASA on The Commons
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </article> */}
        </main>
      )}
    </main>
  );
};

export default CurrBlog;
