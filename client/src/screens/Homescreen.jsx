import React, { useEffect, useState } from "react";
import axios from "axios";
import Flight from "../components/Flight";
import Loader from "../components/Loader";
import { DatePicker, Input, Select } from "antd";
import "antd/dist/antd.css";
import { API_URL } from "../constant/const";
const { RangePicker } = DatePicker;
const { Option } = Select;

function Homescreen() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/api/flights/getallflights`
        );

        setTimeout(() => {
          setFlights(response.data);
          setFilteredFlights(response.data); // Initialize filteredFlights with all flights
          setLoading(false);
        }, 2000);
        console.log(response);
      } catch (error) {
        setError(true);
        console.log(error);
        setError(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render

  const handleSearch = () => {
    return flights.filter((flight) =>
      flight.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSort = (value) => {
    setSortFilter(value);
  };

  const applyFilters = () => {
    let filtered = flights;
    if (searchQuery) {
      filtered = filtered.filter((flight) =>
        flight.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortFilter === "domestic") {
      filtered = filtered.filter((flight) => flight.type === "Domestic");
    } else if (sortFilter === "international") {
      filtered = filtered.filter((flight) => flight.type === "International");
    }
    setFilteredFlights(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchQuery, sortFilter]); // Re-run filters whenever searchQuery or sortFilter changes

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
          <Input
            placeholder="Search by flight name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <Select
            defaultValue="All flights"
            style={{ width: 120 }}
            onChange={handleSort}
          >
            <Option value="all">All flights</Option>
            <Option value="domestic">Domestic</Option>
            <Option value="international">International</Option>
          </Select>
        </div>
        <div className="col-md-3">
          <RangePicker style={{ color: "black" }} />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>error</h1>
        ) : (
          filteredFlights.map((filteredFlight) => (
            <div key={filteredFlight.id} className="col-md-9 mt-3">
              <Flight flight={filteredFlight} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homescreen;
