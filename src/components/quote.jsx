import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Chuck is a force."
    }
  
    render() {
     const { quote } = this.state;
    return (
      <div>
        <p id="chuckSays">{quote}</p>
      </div>
    );
  }
}

export default Quote;