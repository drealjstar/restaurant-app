import React, { Component, Fragment } from "react";
import "./order-summary.css";
import { Link } from "react-router-dom";
import { getTotal } from "../utils";

class OrderSummary extends Component {
  render() {
    const { order } = this.props;
    const total = order.items && getTotal(order.items);

    return (
      <Fragment>
        <div className="order-summary">
          <Link to="/" className="back">
            <p className="backtext">Back To Home</p>
          </Link>

          {order.restaurant && (
            <div className="restaurant-details">
              <h1 className="restaurant-name">{order.restaurant.name}</h1>

              <div className="address">
                <h2 className="restaurant-address">
                  {order.restaurant.street}
                </h2>
                <h2 className="restaurant-address" id="res">
                  {order.restaurant.city}
                </h2>
                <h2 className="restaurant-address" id="res2">
                  {order.restaurant.state}
                </h2>
              </div>

              <h2 className="zip-code">Zipcode {order.restaurant.zipcode}</h2>
            </div>
          )}

          {order.user && (
            <div className="customer-details">
              <h2>ID : {order.user.id}</h2>
              <h2>Name : {order.user.name}</h2>
              <h2>Address : {order.user.address}</h2>
              <h2>Phone : {order.user.phone}</h2>
              <h2>About : {order.user.about}</h2>

              <div className="like">
                <h2 className="space">likes : </h2>{" "}
                {order.user.likes.map((l) => (
                  <h2 style={{ marginRight: 12 }}>{l}</h2>
                ))}{" "}
              </div>
              <div className="dislike">
                <h2 className="space">Dislikes : </h2>{" "}
                {order.user.dislikes.map((d) => (
                  <h2 style={{ marginRight: 12 }}>{d}</h2>
                ))}{" "}
              </div>
            </div>
          )}

          <div className="cards">
            {order.items &&
              order.items.map((item) => {
                return (
                  <div className="items" key={item.name}>
                    <h3>Name : {item.name}</h3>
                    <h3>Category:{item.category}</h3>
                    <h3>Price: {item.price}</h3>
                    <h3>Currency : {item.currency}</h3>
                    <h3>Tax_Pct : {item.tax_pct}</h3>
                    <h3>Quantity : {item.quantity}</h3>
                  </div>
                );
              })}
          </div>

          {total && (
            <div className="taxation">
              <h2>Total Price : {total.price}</h2>
              <h2>Tax : {total.tax}</h2>
              <h2>Total Bill : {total.price + total.tax}</h2>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default OrderSummary;
