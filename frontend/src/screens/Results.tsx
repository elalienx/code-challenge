// Node modules
import { useState } from "react";

// Project files
import InputCheckbox from "../components/InputCheckbox";
import InputRange from "../components/InputRange";
import WordCloudWrapper from "../components/WordCloudWrapper";
import makeCloud from "../scripts/makeWordCloud";
import ItemFeed from "../components/ItemFeed";

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
  const Items = feed.map((item, index) => <ItemFeed key={index} item={item} />);

  return (
    <div id="results">
      <div className="container">
        <WordCloudWrapper data={data} />
        <section className="controls">
          <h2>Controls</h2>
          <InputRange
            label="Minimum ocurrences:"
            state={[ocurrences, setOcurrences]}
            range={[1, 10]}
          />
          <InputCheckbox
            label="Exclude common words (a, and, the, etc)"
            state={[hasBanWords, setHasBanWords]}
          />
        </section>
        <section className="feed">
          <h2>Original feed</h2>
          {Items}
        </section>
      </div>
    </div>
  );
}
