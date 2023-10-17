// Project files
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Results from "./screens/Results";
import Search from "./screens/Search";
import "./scripts/fontawesome";
import "./styles/style.css";

export default function App() {
  // State
  const [feed, setFeed] = useState(Array<string>());
  const [results, setResults] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      {!results && <Search setFeed={setFeed} setResults={setResults} />}
      {results && <Results feed={feed} />}
    </div>
  );
}
