// Node modules
import { useMemo, useState } from "react";

// Project files
import MemoFeed from "../components/MemoFeed";
import InputCheckbox from "../components/InputCheckbox";
import InputRange from "../components/InputRange";
import WordCloudWrapper from "../components/WordCloudWrapper";
import BannedWords from "../data/banned-words.json";
import { formatWords, filterWords, parseWords } from "../scripts/makeWordCloud";

interface iProps {
  feed: string[];
}

export default function Results({ feed }: iProps) {
  // State
  const [ocurrences, setOcurrences] = useState(5);
  const [hasBanWords, setHasBanWords] = useState(false);

  // Properties
  const allWords = useMemo(() => parseWords(feed), []);
  const filteredWords = useMemo(() => filterWords(allWords, BannedWords), []);
  const selectedWords = hasBanWords ? filteredWords : allWords;
  const data = formatWords(selectedWords, ocurrences);

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
          <MemoFeed feed={feed} />
        </section>
      </div>
    </div>
  );
}
