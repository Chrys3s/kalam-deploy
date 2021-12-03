import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import BlogImage from "../../assets/images/blog-img.jpeg";
import PracticeGif from "../../assets/images/code.gif";
import stroke from "../../assets/images/stroke.png";
import utilitySlice from "../../slices/utilitySlice";
import "./LandingPage.css";

const LandingPage = () => {
  const comingForAbout = useSelector(
    (state) => state.utilitySlice.comingForAbout
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "कलम 🖋";
    if (comingForAbout) {
      window.scroll(
        0,
        window.scrollY +
          document.getElementById("about-us-section").getBoundingClientRect()
            .top
      );
      dispatch(utilitySlice.actions.setComingForAbout(false));
      return;
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <main className="home-bg h-screen -mt-14 relative">
        <main className="description text-white">
          <span className="mt-14 absolute text-6xl font-medium top-20 left-32 main-text z-30">
            कलम
          </span>
          <p className="mt-14 absolute text-3xl md:text-xl font-normal top-40 left-32">
            An Interactive Educational Platform
          </p>
          <p className="mt-14 absolute text-3xl md:text-xl font-normal top-48 left-32">
            For Web Development
          </p>
        </main>
      </main>
      <main>
        <main className="flex justify-start landing-2-img">
          <img src={BlogImage} className="blogImage" alt="Blog" />
          <p className="m-2 flex justify-center items-center text-justify w-2/3 pl-10 section-font">
            Blogs are meant to provide learning resources for learning the
            technology that you wish to work with. These blogs are categorised
            in multiple tags which empowers direct navigation to required
            content. Blogs are free for anyone to read but only administrators
            can publish them.
          </p>
        </main>
        <hr />
        <main className="flex justify-end practice-page-bg">
          <p className="m-2 flex justify-center items-center text-justify w-2/3 pr-10 section-font">
            Practise empowers the hands-on experience of writing the code and
            getting instant outputs. It will no longer be just receding blogs or
            getting theoretical knowledge but to actually apply the concepts
            learned right there and then.
          </p>
          <img src={PracticeGif} className="codeGif" alt="Practice" />
        </main>
        <hr />
        <main className="about-us-bg">
          <main id="about-us-section">
            <main className="flex justify-center items-center section-font-heading">
              About Us
            </main>
            <img
              src={stroke}
              className="w-96 h-10 block ml-auto mr-auto -mt-6 pl-16 mb-12"
              alt="stroke"
            />
            <p className="section-font-heading-p px-10 pb-28 text-justify">
              Kalam is the interactive multi-facet learning platform especially
              for web development. We are a team of 4 computer science
              engineering students (Ashish, Asmit, Gargeya, Gaurav) from
              University of Petroleum and Energy Studies pursuing the course
              specialised in Cyber Security and Forensics. We thought of Kalam
              as our small contribution to society which is urging to seek
              digital education from and throughout the world. Due to recent
              pandemic, we all were forced to change our lifestyle and make even
              the most mundane tasks virtual and digital. Due to such a
              pressure, it was a time of crisis of numerous sectors but
              especially education sector. Kalam provides a way to do all the
              basic tasks required to learn web development at one place. You
              can learn the concepts through blogs and then can perform hands on
              practise on the practise feature.
            </p>
          </main>
        </main>
      </main>
      <Footer />
    </main>
  );
};

export default LandingPage;
