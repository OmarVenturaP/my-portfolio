import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFilePdf,
  faPeopleGroup,
  faUserGear,
  faPeopleCarryBox,
  faComments,
  faEarListen,
  faGraduationCap,
  faUserPlus,
  faQuestion,
  faArrowsRotate,
  faArrowsSplitUpAndLeft,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function about() {
  return (
    <section className="page-section bg-dark  mt-5" id="about">
      <div className="container">
        <div className="text-center">
          <h1 className="section-heading mb-5 pb-5">Sobre mi</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="team-member text-center mb-3">
              <picture>
                <img
                  className="mx-auto rounded-circle"
                  src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701406423/profile_lzmeh1.png"
                  width={200}
                  alt="Omar Ventura"
                />
              </picture>
              <h4 className="mt-3 mb-4">Omar Ventura</h4>
              <OverlayTrigger
                overlay={
                  <Tooltip id="top">
                    <strong>Github</strong>
                  </Tooltip>
                }
              >
                <a
                  className="btn btn-dark btn-social mx-2"
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
                    <strong>Whatsapp</strong>
                  </Tooltip>
                }
              >
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://wa.link/r5vy32"
                  aria-label="Omar Ventura Whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="p-2" icon={faWhatsapp} />
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={
                  <Tooltip id="top">
                    <strong>LinkedIn</strong>
                  </Tooltip>
                }
              >
                <a
                  className="btn btn-dark btn-social mx-2"
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
                    <strong>Envía un correo</strong>
                  </Tooltip>
                }
              >
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="mailto:reparaciones.tonala@hotmail..com?Subject=Información%sobre"
                  aria-label="Omar Ventura mail Profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="p-2" icon={faEnvelope} />
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
                  className="btn btn-dark btn-social mx-2"
                  href="https://drive.google.com/file/d/13IBNCeQ98FhCluebX7VaTZHm-b4FOK4i/view?usp=sharing"
                  aria-label="Omar Ventura CV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="p-2" icon={faFilePdf} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="text-center">
              <h4 className="mt-3 mb-4"></h4>
              <OverlayTrigger
                overlay={
                  <Tooltip id="top">
                    <strong>AZ-900</strong>
                  </Tooltip>
                }
              >
                <a
                  className="btn btn-social mx-2"
                  href="https://www.credly.com/badges/07ccaf21-22b2-4e5d-9619-103d486d9ed7?source=linked_in_profile"
                  aria-label="Omar Ventura Certified Azure Fundamentals"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <img
                      className="mx-auto rounded-circle"
                      src="https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
                      width={40}
                      alt="Omar Ventura"
                    />
                  </picture>
                </a>
              </OverlayTrigger>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <br />
            <h4 className="mb-4 mt-3">Soft Skills</h4>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Trabajo en equipo</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faPeopleGroup} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Administración</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faUserGear} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Capacidad de aprendizaje</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faGraduationCap} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Capacidad de adaptación</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon
                  className="p-3"
                  icon={faArrowsSplitUpAndLeft}
                />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Actualización constante</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faArrowsRotate} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Pensamiento crítico</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-4" icon={faQuestion} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Sociable</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faUserPlus} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Empatía</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faPeopleCarryBox} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Comunicación</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faComments} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id="top">
                  <strong>Dispuesto a escuchar</strong>
                </Tooltip>
              }
            >
              <a className="btn btn-dark btn-social1 mx-1">
                <FontAwesomeIcon className="p-3" icon={faEarListen} />
              </a>
            </OverlayTrigger>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-9 mx-auto text-center justify-content-center">
            <p className="large mb-3 mt-3 fs-5">
              Autodidacta, en constante aprendizaje de tecnologías y servicios,
              que disfruta trabajando en entornos dinámicos. Capaz de ofrecer
              una buena resolución de posibles incidencias.
            </p>
            <p className="large mb-3 mt-3 fs-5">
              Abierto a nuevas oportunidades y retos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
