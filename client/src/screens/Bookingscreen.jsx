import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Loader from "../components/Loader";
import BookPanel from "./BookPanel";
import { API_URL } from "../constant/const";


function Bookingscreen() {
  const { flightid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [flight, setFlight] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`${API_URL}/api/flights/getflightbyid`, {
          flightid,
        });
        setTimeout(() => {
          setFlight(response.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchFlight();
  }, [flightid]);

  async function bookFlight() {
    const bookingDetails = {
      flight,
      userid: flight._id,
      from: flight.from,
      to: flight.to,
      totalamount: flight.rent,
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

    try {
      const result = await axios.post(
        `${API_URL}/api/bookings/bookflight`,
        bookingDetails
      );
      console.log(result.data);
      setTimeout(() => {
        setShowModal(false);
        setPaymentSuccess(true);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{flight.name}</h1>
              <img className="bigimg" src={flight.imgUrls[0]} alt="" />
            </div>

            <div className="col-md-6">
              <h1 style={{ textAlign: "right" }}>Flight Booking Details</h1>
              <hr />
              <div style={{ textAlign: "right" }}>
                <b>
                  <p>Flight Name :- {flight.name}</p>
                  <p>Departure :- {flight.from}</p>
                  <p>Arrival :- {flight.to}</p>
                  <p>Maximum seats :- {flight.maxCount}</p>
                  <p>Departure Time :- {flight.departure}</p>
                  <p>Arrival Time :- {flight.arrival}</p>
                </b>
              </div>

              <div style={{ textAlign: "right" }}>
                <h1>Amount</h1>
                <b>
                  <p>Rent :- {flight.rent}</p>
                </b>
                <hr />
                <h3>Total Ammount : - {flight.rent}</h3>
              </div>

              <div style={{ float: "right" }}>
                {paymentSuccess ? (
                  <Link to="/profile">View Booked Flights</Link>
                ) : (
                  <button className="btn btn-primary" onClick={bookFlight}>
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your payment has been processed successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="m-5">{flight && <BookPanel flight={flight} />}</div>
    </div>
  );
}

export default Bookingscreen;
