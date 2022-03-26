import { Spinner } from "react-bootstrap";
function Preloader() {
  return (
    <div className="spinner-container">
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="danger" />
    </div>
  );
}

export { Preloader };
