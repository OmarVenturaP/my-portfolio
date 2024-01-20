import React from "react";
import { pool } from "../lib/db";

export default async function DataProjects() {
  const client = await pool.connect();
  const { rows } = await client.query(`SELECT * from projects`);

  return (
    <>
      <div className="container mt-5" id="portfolio">
        <div className="text-center mt-5 pt-3">
          <h1 className="mt-5 pt-5">Proyectos</h1>
          <h4 className="section-subheading mb-3"></h4>
        </div>
        <div className="row justify-content-around mt-5">
          {rows.length ? (
            rows
              .slice(0)
              .sort((a, b) => a.id - b.id)
              .map((project, key) => (
                <div className="col-lg-6 col-sm-12 mb-4 section-card" key={key}>
                  <div className="ms-1 me-1 shadow card bg-secondary shadow-lg">
                    <div
                      type="button"
                      className="col-12 text-center p-3 d-flex flex-wrap justify-content-center align-items-center"
                      id="item"
                    >
                      <picture className="col-12 card-image">
                        <img
                          className="object-fit-cover object-fit-center overflow-hidden rounded-3"
                          src={project.img}
                          height={340}
                          width="auto"
                          alt={project.name}
                        />
                      </picture>
                      <div
                        height={300}
                        className="data flex flex-column overflow-hidden col-12 p-3 mh-100"
                      >
                        <div className="fs-5 text-btn">
                          <strong>{project.nombre}</strong>
                        </div>
                        <div className="description mt-3 text-light text-center overflow-hidden fs-6">
                          {project.descripcion}
                        </div>
                        {project.categoria == "NULL" ? (
                          <div className="mt-3 text-light text-center overflow-hidden fs-6"></div>
                        ) : (
                          <div className="mt-3 text-light text-center overflow-hidden fs-6">
                            <p>Tags:</p>
                            {project.categoria}
                          </div>
                        )}
                        <div className="mt-3">
                          <a
                            href={project.url_demo}
                            className="ms-2 btn btn-dark"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Demo
                          </a>
                          <a
                            href={project.url_repo}
                            className="ms-2 btn btn-dark"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Repositorio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
