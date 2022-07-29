import { Modal, Button } from "react-bootstrap";

export default function CustomModal(props) {
  const { show, setShow, response,shortlisted,activity } = props;

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Stats</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div classname="d-flex flex-row">
          <div className="stat-num w-100 d-flex justify-content-center flex-column">
            <div className="value">{response}</div>
            <div className="name">Response</div>
          </div>
          <div className="stat-num w-100 d-flex justify-content-center flex-column">
            <div className="value">{shortlisted}</div>
            <div className="name">Shortlisted</div>
          </div>
          <div className="stat-num w-100 d-flex justify-content-center flex-column">
            <div className="value">{activity}</div>
            <div className="name">Activity</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
