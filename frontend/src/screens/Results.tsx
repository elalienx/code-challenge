// Node modules
import { useMemo, useState } from "react";

// Project files
import InputCheckbox from "../components/InputCheckbox";
import InputRange from "../components/InputRange";
import WordCloudWrapper from "../components/WordCloudWrapper";
import ItemFeed from "../components/ItemFeed";
import BannedWords from "../data/banned-words.json";
import { formatWords, filterWords, parseWords } from "../scripts/makeWordCloud";

interface iProps {
  feed: string[];
}

export default function Results({ feed }: iProps) {
  // State
  const [ocurrences, setOcurrences] = useState(5);
  const [hasBanWords, setHasBanWords] = useState(false);
  const allWords = useMemo(() => parseWords(feed), []);
  const filteredWords = useMemo(() => filterWords(allWords, BannedWords), []);
  const Items = useMemo(() => createFeed(feed), []);

  // Properties
  const selectedWords = hasBanWords ? filteredWords : allWords;
  const data = formatWords(selectedWords, ocurrences);

  // Methods
  function createFeed(feed: string[]) {
    const result = feed.map((item, index) => (
      <ItemFeed key={index} item={item} />
    ));

    return result;
  }

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
