import React, { useEffect, useState } from "react";
import axios from "axios";
import Flight from "../components/Flight";

function Homescreen() {
  const [flight, setFlight] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/flights/getallflights");
        console.log(response);

        setFlight(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setError(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>error</h1>
        ) : (
          flight.map((flight) => {
            return (
              <div key={flight.id} className="col-md-9 mt-3">
                <Flight flight={flight} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
