import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Flight({ flight }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={flight.imgUrls[0]} className="smallimg" alt={flight.name} />
      </div>
      <div className="col-md-7">
        <h1> {flight.name}</h1>
        <b>
          <p>Starting flight :- {flight.from}</p>
          <p>Ending flight:- {flight.to}</p>
          <p>Max Count :- {flight.maxCount}</p>
          <p>Phone Number :- {flight.phoneNumber}</p>
          <p>Type :- {flight.type}</p>
        </b>

        <div style={{ float: "right" }}>
          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Flight;
