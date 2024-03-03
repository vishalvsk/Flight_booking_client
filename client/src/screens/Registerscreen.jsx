import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { API_URL } from "../constant/const";

function Registerscreen() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const result = await axios.post(
        `${API_URL}/api/users/register`,
        formData
      );
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }, 2000); // Simulate a delay of 2 seconds
      console.log(result.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="btn btn-link">
                <Link to="/login">Login here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && <Success message="Registration success" />}
    </div>
  );
}

export default Registerscreen;
