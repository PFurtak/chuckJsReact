
import React from "react";
import Quote from "./components/quote";
import Joke from "./components/refreshJoke";
import Category from "./components/category";
import Chuckimg from "./components/chuckimg";
import Footer from "./components/footer";
import './App.css';

function App() {

  const chuckQuote = "Covid was exposed to Norris, it is now in quarantine."

  return (
    <div className="App">
      <h1>Chuck.JS</h1>
      <Quote quote={chuckQuote} category="develop" />
      <Joke />
      <Category />
      <Chuckimg />
      <Footer />
    </div>
  );
}

export default App;
