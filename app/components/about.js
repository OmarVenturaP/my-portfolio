import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf, faPeopleGroup, faUserGear, faPersonChalkboard, faPeopleCarryBox, faComments, faEarListen, faLanguage, faGraduationCap, faUserPlus, faBook, faKitchenSet, faFootball, faTv } from "@fortawesome/free-solid-svg-icons";

export default function about() {
  return (
    <section className="page-section bg-dark  mt-5" id="about">
      <div className="container">
        <div className="text-center">
          <h1 className="section-heading mb-5 pb-5">Sobre mi</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="team-member text-center">
              <img className="mx-auto rounded-circle" src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1701406423/profile_lzmeh1.png" width={200} alt="..." />
              <h4 className="mt-3">Omar Ventura</h4>
              <p className="text-muted" />
              <a className="btn btn-dark btn-social mx-2" href="https://github.com/OmarVenturaP" aria-label="Omar Ventura GitHub Profile" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faGithub} /></a>
              <a className="btn btn-dark btn-social mx-2" href="https://wa.link/r5vy32" aria-label="Omar Ventura Whatsapp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faWhatsapp} /></a>
              <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/omarventurap/" aria-label="Omar Ventura LinkedIn Profile" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faLinkedin} /></a>
              <a className="btn btn-dark btn-social mx-2" href="mailto:reparaciones.tonala@hotmail..com?Subject=Información%sobre" aria-label="Omar Ventura mail Profile" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faEnvelope} /></a>
              <a className="btn btn-dark btn-social mx-2" href="https://drive.google.com/file/d/13IBNCeQ98FhCluebX7VaTZHm-b4FOK4i/view?usp=sharing" aria-label="Omar Ventura CV" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faFilePdf} /></a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <br />
            <h4>Soft Skills</h4>
            <p className="text-muted" />
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faPeopleGroup} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faUserGear} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faPersonChalkboard} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faPeopleCarryBox} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faComments} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faEarListen} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faLanguage} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faGraduationCap} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faUserPlus} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faBook} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faKitchenSet} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faFootball} /></a>
            <a className="btn btn-dark btn-social1 mx-1"><FontAwesomeIcon className="p-3" icon={faTv} /></a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-9 mx-auto text-center justify-content-center">
            <p className="large mb-3 mt-3 fs-5">
              Autodidacta, en constante aprendizaje de tecnologías y servicios, que disfruta trabajando en entornos dinámicos. Capaz de ofrecer una sólida resolución de posibles incidencias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
