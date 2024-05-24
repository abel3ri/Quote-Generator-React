import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Quote.css";

export default function Quote() {
  const [quote, setQuote] = useState({ author: "", text: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const quote = (
      await axios.get("http://inspo-quotes-api.herokuapp.com/quotes/random")
    ).data.quote;
    setQuote(quote);
    setIsLoading(false);
  };

  return (
    <div className="Quote">
      {isLoading && <div className="loader"></div>}
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
