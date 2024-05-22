import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Quote.css";

export default function Quote() {
  const [quote, setQuote] = useState({ author: "", text: "" });

  useEffect(() => {
    async function fetchInitialQuote() {
      const quote = (
        await axios.get("http://inspo-quotes-api.herokuapp.com/quotes/random")
      ).data.quote;
      setQuote(quote);
    }
    fetchInitialQuote();
  }, []);

  const fetchQuote = async () => {
    const quote = (
      await axios.get("http://inspo-quotes-api.herokuapp.com/quotes/random")
    ).data.quote;
    setQuote(quote);
  };
  if (quote.author == "") {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }
  return (
    <div className="Quote">
      <div>
        <h3>"{quote.text}</h3>
        <h5> - {quote.author}</h5>
      </div>
      <button onClick={fetchQuote} className="btn btn-random">
        Generate
      </button>
    </div>
  );
}
