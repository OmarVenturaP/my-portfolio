"use client"
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import ModalProject from "./modal";
import { allProjects, useModal, useProjectInfo } from "./../context/state";
import axios from "axios";

export default function DataProjects() {
  const url = process.env.NEXT_PUBLIC_API_URL;

  // Abre proyecto individual
  const [modal, setModal] = useRecoilState(useModal);
  const [infoProject, setInfoProject] = useRecoilState(useProjectInfo);

  // Obtiene los datos de los proyectos
  const getProjectsData = async () => {
    const response = await axios.get(`${url}/projects`);
    setProjects(response.data);
  };

  useEffect(() => {
    getProjectsData()
  });

  const [project, setProjects] = useRecoilState(allProjects);

  // Cambia el color de fondo de la página al pasar el cursor sobre un proyecto
  function changeBackground(e) {
    e.target.style.opacity = "0.5";
  }
  function backgroundNone(e) {
    e.target.style.opacity = "1";
  }

  return (
    <>
      {
            (modal) ? (
              <ModalProject className="position-fixed" project={infoProject} />
            ) : (
              <div />
            )
        }
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="">Portfolio</h1>
          <h4 className="section-subheading mb-3">A continuación algunos proyectos realizados.</h4>
        </div>
        <div className="row justify-content-around mt-5">
          {
            project.length ? (
              project.map((project, key) => (
                <div className="col-lg-4 col-sm-6 mb-4 section-card" key={key}>
                  <div className="ms-1 me-1 shadow card bg-secondary portfolio-item shadow-lg" height={500} onMouseOver={changeBackground} onMouseOut={backgroundNone}>
                    <a className="p-3" onClick={() => { setInfoProject(project), setModal(!modal); }}>
                      <div type="button" className="portfolio-item text-center" id="item">
                        <img className="responsive-img-project" src={project.img} height={230} width="auto" alt={project.name} />
                      </div>
                    </a>
                    <div className="mt-2 mb-2 text-light text-center">{project.nombre}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
