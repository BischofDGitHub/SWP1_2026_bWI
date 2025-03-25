import { useEffect, useState } from "react";
import Quote from "../atoms/Quote";
import SearchBar from "../atoms/SearchBar";

type Props = {};
type Quote = {
  content: string;
  submitter: string;
};

export default function quotes({}: Props) {
  const [quotes, setQuotes] = useState<Array<Quote>>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Array<Quote>>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://10.110.48.226:5000/quotes").then((res) => {
      res.json().then((data) => {
        setQuotes(data);
        setFilteredQuotes(data);
      });
    });
  }, []);

  useEffect(() => {
    setFilteredQuotes(
      quotes.filter((quote: Quote) => {
        return quote.content.includes(filter);
      })
    );
  }, [filter]);

  return (
    <div>
      <SearchBar />
      {quotes.map((quote: Quote) => (
        <Quote content={quote.content} submitter={quote.submitter} />
      ))}
    </div>
  );
}
