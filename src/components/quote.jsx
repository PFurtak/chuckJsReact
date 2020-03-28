import React, { Component } from 'react';

class Quote extends Component {
  state = {
    quote: 'Hiding from Norris...'
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/random?category=animal`
      );
      const data = await res.json();
      this.setState({
        quote: data.value
      });
    } catch (error) {
      this.setState({
        quote: error.message
      });
    }
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        <p id='chuckSays'>{quote}</p>
      </div>
    );
  }
}

export default Quote;
