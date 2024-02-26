import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Link to={`/book/${flight._id}`}>
            <button className="btn btn-primary m-2">Book Flight</button>
          </Link>
          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={flight.imgUrls[0]}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={flight.imgUrls[1]}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={flight.imgUrls[0]}
              alt="Third slide"
            />
          </div>
        </Modal.Body>
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
