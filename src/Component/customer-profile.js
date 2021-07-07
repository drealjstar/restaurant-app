import React, { Component } from "react";
import "./customer-profile.css";
import { Link } from "react-router-dom";

class CustomerProfile extends Component {
  render() {
    const { customer } = this.props;

    return (
      <div className="profile-page">
        {customer ? (
          <div className="profile">
            <div className="profile-top"></div>
            <div className="profile-picture"></div>

            <div className="profile-details">
              <h1 className="profile-head">Customer Profile</h1>
              <h2>Name : {customer.name}</h2>
              <h2>Address : {customer.address}</h2>
              <h2>Phone : {customer.phone}</h2>
              <h2>About : {customer.about}</h2>
            </div>

            <Link to="/orders">
              <button className="button">View Orders </button>
            </Link>
          </div>
        ) : (
          <h2 class="loading">Loading ...</h2>
        )}
      </div>
    );
  }
}

export default CustomerProfile;
