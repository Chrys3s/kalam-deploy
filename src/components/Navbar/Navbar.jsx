import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import utilitySlice from "../../slices/utilitySlice";
import switchSound from "../../assets/audio/switch-8.mp3";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.userInfo);
  const { onClick, val } = props;
  const [showDropDown, setShowDropDown] = useState(false);

  const showPopup = () => {
    dispatch(utilitySlice.actions.displayPopup(true));
  };

  const switchMode = async () => {
    onClick(!val);
    await new Audio(switchSound).play();
  };

  const goToAboutSection = () => {
    const aboutUs = document.getElementById("about-us-section");
    if (aboutUs) {
      window.scroll(0, window.scrollY + aboutUs.getBoundingClientRect().top);
      return;
    }
    dispatch(utilitySlice.actions.setComingForAbout(true));
    history.push("/");
  };

  const refreshState = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
    window.scrollTo(0, 0);
  };

  return (
    <main className="sticky top-0 z-10 flex justify-between bg-customN-light dark:bg-customN-dark dark:text-white h-14 shadow-xl dark:shadow-2xl opacity-95">
      <main className="flex justify-center items-center">
        <span
          className="p-2 m-1 mx-3 text-3xl font-semibold cursor-pointer"
          onClick={refreshState}
        >
          क
        </span>
      </main>
      <main className="flex">
        <button className="p-2 m-1 curson-not-allowed hover:underline" disabled>
          <Link to="/blogs">Blogs</Link>
        </button>
        <button className="p-2 m-1 mx-12 hover:underline">
          <Link to="/practice">Practice</Link>
        </button>
        <button className="p-2 m-1 hover:underline" onClick={goToAboutSection}>
          About
        </button>
      </main>
      <main className="flex justify-around h-14 items-center mr-4">
        <span
          className="cursor-pointer p-2 m-1 mr-2 text-2xl"
          onClick={switchMode}
        >
          {val && <FaSun color="fff200" />}
          {!val && <FaMoon />}
        </span>
        {!userInfo.isLoggedIn ? (
          <button onClick={showPopup} className="p-2 m-1 text-2xl">
            <FaSignInAlt />
          </button>
        ) : (
          <>
            <button
              className="rounded-2xl bg-red-500 h-8 w-8 items-center text-center border-none"
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            >
              {userInfo.userName[0].toUpperCase()}
            </button>
            <DropDown show={showDropDown} />
          </>
        )}
      </main>
    </main>
  );
};

export default Navbar;
