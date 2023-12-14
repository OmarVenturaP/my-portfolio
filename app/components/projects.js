"use client"
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ModalProject from "./modal";
import { allProjects, useProjectInfo } from "./../context/state";
import axios from "axios";


export default function DataProjects() {

  // Abre proyecto individual
  const [modalShow, setModalShow] = useState(false);
  const [infoProject, setInfoProject] = useRecoilState(useProjectInfo);

  // Obtiene los datos de los proyectos
  const getProjectsData = async () => {
    const response = await axios.get(`https://backend-servitec.onrender.com/projects`);
    if (response.data.length > 0) {
      setProjects(response.data);
    }
    console.log(response.data);
  };

  useEffect(() => {
    getProjectsData()
  });

  const [project, setProjects] = useRecoilState(allProjects);

  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="">Proyectos</h1>
          <h4 className="section-subheading mb-3"></h4>
        </div>
        <div className="row justify-content-around mt-5">
          {
            project.length ? (
              project.map((project, key) => (
                <div className="col-lg-4 col-sm-6 mb-4 section-card" key={key}>
                  <div className="ms-1 me-1 shadow card bg-secondary portfolio-item shadow-lg" height={500}>
                    <a className="p-3" onClick={() => { setInfoProject(project), setModalShow(true); }}>
                      <div type="button" className="portfolio-item text-center" id="item">
                        <picture>
                          <img className="responsive-img-project" src={project.img} height={230} width="auto" alt={project.name} />
                        </picture>
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
        <ModalProject
          show={modalShow}
          onHide={() => setModalShow(false)}
          project={infoProject}
        />
      </div>

    </>
  );
}
