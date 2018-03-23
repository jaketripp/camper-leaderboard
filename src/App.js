import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import axios from "axios";
import DownCaret from "react-icons/lib/fa/caret-down";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCamperList: "monthly",
      monthly: [],
      allTime: []
    };
    this.getData();
  }

  getData() {
    axios
      .get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => {
        this.setState({ monthly: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => {
        this.setState({ allTime: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  switchToMonthly = () => {
    this.setState({ visibleCamperList: "monthly" });
  };

  switchToAllTime = () => {
    this.setState({ visibleCamperList: "allTime" });
  };

  render() {
    return (
      <div className="container">
        <h1>freeCodeCamp Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick={this.switchToMonthly}>
                Past 30 days
                {this.state.visibleCamperList === "monthly" ? (
                  <DownCaret />
                ) : (
                  ""
                )}
              </th>
              <th onClick={this.switchToAllTime}>
                All time
                {this.state.visibleCamperList === "allTime" ? (
                  <DownCaret />
                ) : (
                  ""
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state[this.state.visibleCamperList].map((camper, i) => (
              <ListItem
                {...camper}
                rank={i + 1}
                key={`${i}-${camper.username}`}
              />
            ))}
          </tbody>
        </table>
        <div className="footer">
          <p>
            Made by <a href="https://jaketripp.com">Jake Tripp</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
