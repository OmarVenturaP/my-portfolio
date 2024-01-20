import { pool } from "../lib/db";

export default async function Job({ params }) {
  const client = await pool.connect();
  const { rows } = await client.query(`SELECT * from jobs`);

  return (
    <div>
      <div className="container mt-5 pt-5 mb-5 pb-5" id="jobs">
        <h1 className="text-center mt-5 pt-5 mb-5 ">Experiencia en IT</h1>
        <ul className="timeline mb-5 ms-5 me-5 z-2">
          {rows.length ? (
            rows
              .slice(0)
              .reverse()
              .map((job, key) =>
                key % 2 == 0 ? (
                  <li
                    className="timeline-inverted section-card-job"
                    id="element"
                    key={key}
                  >
                    <div className="timeline-image">
                      <picture>
                        <img
                          className="rounded-circle img-fluid"
                          src={job.logo}
                          alt={job.empresa}
                        />
                      </picture>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="">{job.empresa}</h3>
                        <h5 className="periodo">{job.periodo}</h5>
                        <h6 className="">{job.posicion}</h6>
                      </div>
                      <div className="timeline-body">
                        <p className="text-light text-job">{job.descripcion}</p>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li className="" id="element" key={key}>
                    <div className="timeline-image">
                      <picture>
                        <img
                          className="rounded-circle img-fluid"
                          src={job.logo}
                          alt={job.empresa}
                        />
                      </picture>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="">{job.empresa}</h3>
                        <h5 className="periodo">{job.periodo}</h5>
                        <h6 className="">{job.posicion}</h6>
                      </div>
                      <div className="timeline-body">
                        <p className="text-light text-job">{job.descripcion}</p>
                      </div>
                    </div>
                  </li>
                )
              )
          ) : (
            <li className="" id="element">
              <div className="timeline-image spinner-grow bg-secondary" />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 />
                  <h3 className="subheading" />
                </div>
                <div className="timeline-body">
                  <p className="text-light" />
                </div>
              </div>
            </li>
          )}
          <li className="timeline-inverted">
            <div className="timeline-image bg-secondary">
              <h4>
                Inicia
                <br />
                el
                <br />
                Viaje!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
