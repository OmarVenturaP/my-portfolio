import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
  return (
    <footer className="footer mt-5 pt-3 bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center m-0 p-0">
            <p>
              <strong className="text-dark me-2">
                <FontAwesomeIcon width={15} size="2xs" icon={faChevronLeft} />
                Omar Ventura Pérez /
                <FontAwesomeIcon width={15} icon={faChevronRight} />
              </strong>{" "}
              Todos los derechos &copy; 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
