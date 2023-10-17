// Node modules
import { useState } from "react";

// Project files
import Illustration from "../assets/illustration.png";

interface iProps {
  setFeed: (feed: string[]) => void;
  setResults: (results: boolean) => void;
}

export default function Search({ setFeed, setResults }: iProps) {
  // State
  const [url, setURL] = useState("");

  // Properties
  const sampleURL = "http://rss.cnn.com/rss/cnn_topstories.rss";
  const endpoint = "/api/rss?feed=";

  // Methods
  async function parseURL() {
    try {
      const request = await fetch(endpoint + url);
      const feed = await request.json();

      console.log(request);

      onSucess(feed);
    } catch (error: any) {
      onFailure(error);
    }
  }

  function onSucess(feed: string[]) {
    setFeed(feed);
    setResults(true);
  }

  function onFailure(error: Error) {
    alert("Can't load the feed! Check the url & open the console for details");
    console.error(error);
  }

  return (
    <div id="search">
      <div className="container">
        <img className="illustration" src={Illustration} />
        <p>
          This website allows you to create a "Word cloud" diagram of the words
          that appear the most in a news feed.
        </p>
        <label className="input-field">
          <input
            type="text"
            value={url}
            placeholder="cnn.com/tech"
            onChange={(event) => setURL(event.target.value)}
          />
        </label>
        <button onClick={() => parseURL()}>Create diagram</button>
        <small>
          Click here for a sample feed:
          <code onClick={() => setURL(sampleURL)}>{sampleURL}</code>
        </small>
      </div>
    </div>
  );
}
