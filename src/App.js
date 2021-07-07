import React from "react";
import CustomerProfile from "./Component/customer-profile";
import OrderSummary from "./Component/order-summary";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    Axios.get("https://indapi.kumba.io/webdev/assignment").then((result) => {
      this.setState({ data: result.data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <CustomerProfile customer={data.user} />
            </Route>

            <Route exact path="/orders">
              <OrderSummary order={data} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




