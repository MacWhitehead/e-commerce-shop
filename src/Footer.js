import React, { Component } from "react";
import "./index.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-secondary text-center text-lg-start border border-dark">
        <p style={{'paddingTop': "15px"}} className="text-center">
          Fancy Products LLC 2021 All rights reserved
        </p>
      </footer>
    );
  }
}
