export default function nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img className="brand-logo" src="https://res.cloudinary.com/dzgqpqv9f/image/upload/v1700721248/navbar-logo2_txtjcs.svg" alt="..." />
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#skills">Tecnologías</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#jobs">Experiencia</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">sobre mi</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
