import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useProjectInfo } from "./../context/state";
import { Modal } from "react-bootstrap";

export default function ModalProject(props) {

  const project = useRecoilValue(useProjectInfo);

  return (
    <>
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    className="bg-dark"
    centered
  >
    <Modal.Header className="bg-secondary" closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-center text-btn">
        {project.nombre}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-secondary justify-content-center text-center">
    <picture>
      <img className="img-fluid mx-auto" src={project.img} height={400} width={400} alt={project.nombre} />
    </picture>
    <div className="pt-3 m-0 p-0">
      <p className="text-light">{project.descripcion}</p>
    </div>
    </Modal.Body>
    <Modal.Footer className="bg-secondary justify-content-center">
      <a href={project.url_demo} className="ms-2 btn btn-dark" target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2" icon={faPaperPlane}/> Demo</a>
      <a href={project.url_repo} className="ms-2 btn btn-dark" target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2" icon={faGithub}/> Repositorio</a>
    </Modal.Footer>
  </Modal>

    </>
  );
}
