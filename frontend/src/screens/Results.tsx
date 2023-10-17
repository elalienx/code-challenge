// Node modules
import { useState } from "react";

// Project files
import InputCheckbox from "../components/InputCheckbox";
import InputSlider from "../components/InputSlider";
import WordCloudWrapper from "../components/WordCloudWrapper";
import makeCloud from "../scripts/makeWordCloud";

interface iProps {
  feed: string[];
}

export default function Results({ feed }: iProps) {
  // State
  const [ocurrences, setOcurrences] = useState(5);
  const [hasBanWords, setHasBanWords] = useState(false);

  // Properties
  const banWords = ["a", "and", "in", "of", "on", "or", "the", "to"];
  const data = makeCloud(feed, banWords, hasBanWords, ocurrences);

  // Components
  const FeedTitles = feed.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div id="results">
      <div className="container">
        <WordCloudWrapper data={data} />
        <section className="controls">
          <h2>Controls</h2>
          <InputSlider
            label="Minium ocurrences"
            state={[ocurrences, setOcurrences]}
            range={[0, 10]}
          />
          <InputCheckbox
            label="Exclude common words (a, and, the, etc)"
            state={[hasBanWords, setHasBanWords]}
          />
        </section>
        <section className="feed">
          <h2>Original feed</h2>
          <ol>{FeedTitles}</ol>
        </section>
      </div>
    </div>
  );
}
