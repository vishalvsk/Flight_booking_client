import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Bookingscreen() {
  const { flightid } = useParams(); // Move outside of the fetchFlight function
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/flights/getflightbyid", {
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
  }, [flightid]); // Use flightid in the dependency array to run fetchFlight when flightid changes

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>error</h1>
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
                  <p>name :- </p>
                  <p>Departure :- {flight.from}</p>
                  <p>Arrival :- {flight.to}</p>
                  <p>Maximum seats :- {flight.maxCount}</p>
                </b>
              </div>

              <div style={{ textAlign: "right" }}>
                <h1>Amount</h1>
                <b>
                  <p>Rent :- {flight.rent}</p>
                </b>
                <hr />
                <h3>Total Ammount : - </h3>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
