import { useEffect, useState } from "react";
import Quote from "./Quote";

type Props = {};
type Quote = {
  content: string;
  submitter: string;
};

export default function quotes({}: Props) {
  const [quotes, setQuotes] = useState<Array<Quote>>([]);

  useEffect(() => {
    fetch("http://10.0.0.192:5000/quotes").then((res) => {
      res.json().then((data) => {
        setQuotes(data);
        console.log(data);
      });
    });
  }, []);

  return (
    <div>
      {quotes.map((quote: Quote) => (
        <Quote content={quote.content} submitter={quote.submitter} />
      ))}
    </div>
  );
}
