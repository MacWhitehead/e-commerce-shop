import React, { Component } from "react";
import "./index.css";

const footer = {
    position: "bottom",
  }

export class Footer extends Component {
  render() {
    return (
      <footer style={{footer}} className="bg-secondary text-center text-lg-start border border-dark">
        <p className="text-center">
          Fancy Products LLC 2021 All rights reserved
        </p>
      </footer>
    );
  }
}
