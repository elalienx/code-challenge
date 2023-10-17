// Project files
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Result from "./screens/Result";
import Search from "./screens/Search";
import "./styles/style.css";

export default function App() {
  // State
  const [feed, setFeed] = useState(Array<string>());
  const [results, setResults] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      {!results && <Search setFeed={setFeed} setResults={setResults} />}
      {results && <Result feed={feed} />}
    </div>
  );
}
