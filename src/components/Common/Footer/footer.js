import React from "react";
import "./styles.css";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Tracker
      </h2>
      <div className="social-links">
        <a href="https://www.twitter.com/rashcasm">
          <TwitterIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
