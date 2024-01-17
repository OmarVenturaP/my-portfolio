import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function header() {
  return (
    <div className="header">
      <header className="masthead flex" id="page-top">
        <div className="container flex mt-auto mb-auto">
          <div className="masthead-subheading text-light mt-5 animate__animated animate__fadeInTopLeft">
            Software Developer
          </div>
          <h1 className="masthead-heading text-uppercase text-light mb-5 animate__animated animate__fadeInTopRight">
            Omar Ventura
          </h1>
          <div className="mt-3 animate__animated animate__fadeInUp">
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>LinkedIn</strong>
                </Tooltip>
              }
            >
              <a
                className="btn btn-dark btn-social mx-2 animate__animated animate__fadeInUp"
                href="https://www.linkedin.com/in/omarventurap/"
                aria-label="Omar Ventura LinkedIn Profile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="p-2" icon={faLinkedin} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>GitHub</strong>
                </Tooltip>
              }
            >
              <a
                className="btn btn-dark btn-social mx-2 animate__animated animate__fadeInUp"
                href="https://github.com/OmarVenturaP"
                aria-label="Omar Ventura GitHub Profile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="p-2" icon={faGithub} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Curriculum Vitae</strong>
                </Tooltip>
              }
            >
              <a
                className="btn btn-dark btn-social mx-2 wow animate__animated animate__fadeInUp"
                href="https://drive.google.com/file/d/13IBNCeQ98FhCluebX7VaTZHm-b4FOK4i/view?usp=sharing"
                aria-label="Omar Ventura CV"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="p-2" icon={faFilePdf} />
              </a>
            </OverlayTrigger>
          </div>
        </div>
      </header>
    </div>
  );
}
