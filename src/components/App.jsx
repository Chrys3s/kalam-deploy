import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import BlogPage from "./Blogs/BlogPage";
import PracticePage from "./Practice/PracticePage";
import Navbar from "./Navbar/Navbar";
import NoMatch from "./404/NoMatch";
import LoginPopup from "./LoginPopup/LoginPopup";
import Deletepopup from "./DeletePopup/Deletepopup";
import CurrBlog from "./AllBlogs/CurrBlog";
import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkmode", false);

  useEffect(() => {
    document.title = "कलम 🖋";
  }, []);

  const utility = useSelector((state) => state.utilitySlice);

  return (
    <Router>
      <main className={darkMode ? "dark home" : "home"}>
        <Navbar onClick={setDarkMode} val={darkMode} />
        {utility.loginScreen && <LoginPopup />}
        {utility.deleteScreenPopup && <Deletepopup />}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blogs" exact component={BlogPage} />
          <Route path="/blogs/:id" exact component={CurrBlog} />
          <Route path="/practice" exact component={PracticePage} />
          <Route
            path="/githubAccount/:id"
            component={(id) => {
              window.location.href = `https://github.com/${id.match.params.id}`;
              return null;
            }}
          />
          <Route
            path="/linkedInAccount/:id"
            component={(id) => {
              window.location.href = `https://linkedin.com/in/${id.match.params.id}`;
              return null;
            }}
          />
          <Route
            path="/instaAccount/:id"
            component={(id) => {
              window.location.href = `https://instagram.com/${id.match.params.id}`;
              return null;
            }}
          />
          <Route
            path="/twitterAccount/:id"
            component={(id) => {
              window.location.href = `https://twitter.com/${id.match.params.id}`;
              return null;
            }}
          />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
