import React, { Component } from "react";

export default class GoogleForm extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2Ar6QObYCl0mea8beh-M0rpMSM-GsP1ReTJG1w2WPIjeQiQ/viewform?embedded=true"
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}
