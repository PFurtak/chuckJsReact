import React, { Component } from "react";

class Joke extends Component {
  render() {
    return (
      <div class="refresh">
        <button type="button" id="refreshQuote">
          Another Joke
        </button>
      </div>
    );
  }
}

export default Joke;