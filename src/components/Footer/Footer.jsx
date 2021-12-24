import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sleepInMilliseconds } from "../../helpers/sleepInMilliseconds";

const Footer = () => {
  const [githubLink, setGithubLink] = useState("cptn3m0grv");
  const [linkedInLink, setLinkedInLink] = useState();
  const [instagramLink, setInstagramLink] = useState("_grv_4");
  const [twitterLink, setTwitterLink] = useState("grvg007");
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setAshishLink();
  }, []);

  useEffect(() => {
    setBlink(true);
    const ll = async () => {
      await sleepInMilliseconds(2000);
      setBlink(false);
    };
    ll();
  }, [githubLink]);

  const setAshishLink = () => {
    setGithubLink("ashchaubey");
    setLinkedInLink("hackpandit");
    setInstagramLink("ash.chaubey");
    setTwitterLink("hack_pandit");
  };

  const setAsmitLink = () => {
    setGithubLink("Dracula62");
    setLinkedInLink("asmit-sharma-a499b91ba");
    setInstagramLink("asmit_sharma__");
    setTwitterLink(undefined);
  };

  const setGargeyaLink = () => {
    setGithubLink("Stalwart-GS");
    setLinkedInLink("gargeya-sharma-4159801a3");
    setInstagramLink("__gargeya__");
    setTwitterLink("GargeyaS");
  };

  const setGauravLink = () => {
    setGithubLink("cptn3m0grv");
    setLinkedInLink("gaurav-goyal-4a850a173");
    setInstagramLink("_grv_4");
    setTwitterLink("grvg007");
  };

  return (
    <main className="bg-customN-light dark:bg-customN-dark sticky h-60 dark:text-white flex justify-center items-center">
      <main className="flex">
        <main>
          <h1
            className={`text-2xl mb-2 cursor-pointer ${
              githubLink === "ashchaubey"
              ? `dark:text-white text-black`
              : "text-gray-600 dark:text-black"
            }`}
            onClick={setAshishLink}
          >
            Ashish Chaubey
          </h1>
          <h1
            className={`text-2xl mb-2 cursor-pointer ${
              githubLink === "Dracula62"
              ? `dark:text-white text-black`
              : "text-gray-600 dark:text-black"
            }`}
            onClick={setAsmitLink}
          >
            Asmit Kumar Sharma
          </h1>
          <h1
            className={`text-2xl mb-2 cursor-pointer ${
              githubLink === "Stalwart-GS"
              ? `dark:text-white text-black`
              : "text-gray-600 dark:text-black"
            }`}
            onClick={setGargeyaLink}
          >
            Gargeya Sharma
          </h1>
          <h1
            className={`text-2xl cursor-pointer ${
              githubLink === "cptn3m0grv"
                ? `dark:text-white text-black`
                : "text-gray-600 dark:text-black"
            }`}
            onClick={setGauravLink}
          >
            Gaurav Goyal
          </h1>
        </main>
        <main
          className={`flex justify-center items-center ml-10 ${
            blink ? "animate-pulse" : ""
          }`}
        >
          {githubLink && (
            <Link to={`/githubAccount/${githubLink}`} target="_blank">
              <FaGithub className="text-5xl mr-4" />
            </Link>
          )}
          {linkedInLink && (
            <Link to={`/linkedInAccount/${linkedInLink}`} target="_blank">
              <FaLinkedin className="text-5xl mr-4" />
            </Link>
          )}
          {instagramLink && (
            <Link to={`/instaAccount/${instagramLink}`} target="_blank">
              <FaInstagram className="text-5xl mr-4" />
            </Link>
          )}
          {twitterLink && (
            <Link to={`/twitterAccount/${twitterLink}`} target="_blank">
              <FaTwitter className="text-5xl" />
            </Link>
          )}
        </main>
      </main>
    </main>
  );
};

export default Footer;
