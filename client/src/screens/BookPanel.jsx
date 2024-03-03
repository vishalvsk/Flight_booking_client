import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constant/const";

function BookPanel() {
  const [bookedFlights, setBookedFlights] = useState([]);

  useEffect(() => {
    const fetchBookedFlights = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/bookings/getbookedflights`
        );
        setBookedFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookedFlights();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.post(`${API_URL}/api/bookings/cancelbooking`, { bookingId });
      setBookedFlights((prevFlights) =>
        prevFlights.filter((flight) => flight._id !== bookingId)
      );
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Booked Flights</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookedFlights.map((flight) => (
            <tr key={flight._id}>
              <td>{flight.name}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.totalamount}</td>
              <td>{flight.status}</td>
              <td>
                {flight.status !== "cancelled" && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleCancelBooking(flight._id)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookPanel;
