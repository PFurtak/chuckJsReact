import React, { Component } from "react";

class Quote extends Component {
  render() {
      console.log(this.props)
      const { quote } = this.props;
    return (
      <div>
        <p id="chuckSays">{quote}</p>
      </div>
    );
  }
}

export default Quote;