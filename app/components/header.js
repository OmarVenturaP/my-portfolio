import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function header() {
  return (
    <div className="header">
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="masthead-subheading text-light">Software Developer</div>
          <div className="masthead-heading text-uppercase text-light">Omar Ventura</div>
          <div>
            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/omarventurap/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faLinkedin} /></a>
            <a className="btn btn-dark btn-social mx-2" href="https://github.com/OmarVenturaP" aria-label="GitHub" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faGithub} /></a>
            <a className="btn btn-dark btn-social mx-2" href="https://github.com/OmarVenturaP" aria-label="GitHub" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faDiscord} /></a>
          </div>
        </div>
      </header>
    </div>
  );
}
