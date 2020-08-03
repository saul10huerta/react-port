import React from 'react';
import githubImage from "../../assets/footer/githubImage.png";
import linkedinImage from "../../assets/footer/linkedinImage.png";
import stOver from "../../assets/footer/stOver.png";

function Footer() {
  return (
    <footer className="flex-row">
        <a href="https://github.com/saul10huerta" target="_blank" rel="noopener noreferrer"><img id="img1" src={githubImage} className="my-1" style={{ width: "100%" }} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/saul10huerta/" target="_blank" rel="noopener noreferrer"><img id="img2" src={linkedinImage} className="my-1" style={{ width: "100%" }} alt="LinkedIn" /></a>
        <a href="https://stackoverflow.com/users/12970784/saul10huerta?tab=profile" target="_blank" rel="noopener noreferrer"><img id="img2" src={stOver} className="my-1" style={{ width: "100%" }} alt="StackOverflow" /></a>
    </footer>
  );
}

export default Footer;