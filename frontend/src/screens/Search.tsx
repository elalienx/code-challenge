// Node modules
import { useState } from "react";

// Project files
import Illustration from "../assets/illustration.png";
import InputText from "../components/InputText";

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
    console.error(error);
    alert("Can't load the feed! Check the url & open the console for details");
  }

  return (
    <div id="search">
      <div className="container">
        <img className="illustration" src={Illustration} />
        <p>
          This website allows you to create a <b>Word cloud diagram</b> of the
          words that appear the most in a news feed.
        </p>
        <InputText
          label=""
          state={[url, setURL]}
          placeholder={"cnn.com/tech"}
        />
        <button className="button" onClick={() => parseURL()}>
          Create diagram
        </button>
        <button className="button-sample" onClick={() => setURL(sampleURL)}>
          Click here for a sample feed: {sampleURL}
        </button>
      </div>
    </div>
  );
}
