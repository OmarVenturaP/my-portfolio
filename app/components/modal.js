import React from "react";
import { useRecoilState } from "recoil";
import { useModal } from "./../context/state";

export default function ModalProject({ project }) {
  const [modal, setModal] = useRecoilState(useModal);

  return (
    <>
      {(modal) ? (
        <div className="container w-100 h-100 position-absolute z-3 justify-content-around bg-dark d-flex">
          <div className="h-75 w-75 row text-center justify-content-around" key={project.id}>
            <div className="col-12 pb-5 pe-5 ps-5 pt-2 bg-secondary border border-light border-3 rounded">
              <div className="w-100 text-end">
                <button type="button" className="btn-close position-relative text-end text-danger" onClick={() => setModal(!modal)} />
                <h1 className="modal-title fs-5 text-center">{project.nombre}</h1>
              </div>
              <div className="">
                <img className="img-fluid" src={project.img} height={400} width={400} alt="..." />
                <div className="pt-3 m-0 p-0">
                  <p>{project.descripcion}</p>
                </div>
              </div>
              <div className="mt-5 modal-footer justify-content-center">
                <a href={project.url_demo} className=" ms-2 btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
                <a href={project.url_repo} className="ms-2 btn btn-dark" target="_blank" rel="noreferrer">Repositorio</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}

    </>
  );
}
