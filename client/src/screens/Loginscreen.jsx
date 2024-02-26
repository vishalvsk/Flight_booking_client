import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Loginscreen() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/api/users/login", formData);
      console.log(result.data);

      // Store user details in local storage
      localStorage.setItem("userData", JSON.stringify(result.data));

      // Redirect to home page
      window.location.href = "/home";
    } catch (error) {
      console.log(error.response.data.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
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
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Login
                </button>
              </form>
              <div className="btn btn-link btn-block mt-3">
                <Link to="/home">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
