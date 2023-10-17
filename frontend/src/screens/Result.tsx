// Node modules
import { useState } from "react";
import WordCloud from "react-d3-cloud";

// Project files
import iWordCloudFormat from "../interfaces/iWordCloudFormat";
import rWordCount from "../interfaces/rWordCount";
import countRefences from "../scripts/countReferences";
import filterByMinimumValue from "../scripts/filterByMinimumValue";
import filterByWords from "../scripts/filterByWords";
import formatReferences from "../scripts/formatReferences";

interface iProps {
  feed: string[];
}

export default function Result({ feed }: iProps) {
  // State
  const [minium, setMinimum] = useState(5);
  const [hasCommonWords, setHasCommonWords] = useState(false);

  // Properties
  const banWords = ["a", "and", "in", "of", "on", "or", "the", "to"];
  const cloudSizeInPixels = 300;
  const fontScale = 7.5;
  const data: iWordCloudFormat[] = makeCloud(feed, banWords);

  // Methods
  function makeCloud(data: string[], bannedWords: string[]) {
    const listToText: string = data.join();
    const removeCommas: string = listToText.replaceAll(",", "");
    const textToWordList: string[] = removeCommas.split(" ");
    const allWords: rWordCount = countRefences(textToWordList);
    const filteredWords: rWordCount = filterByWords(allWords, bannedWords);
    const wordsToUse: rWordCount = hasCommonWords ? filteredWords : allWords;
    const minumumWords: rWordCount = filterByMinimumValue(wordsToUse, minium);
    const format: iWordCloudFormat[] = formatReferences(minumumWords);

    return format;
  }

  // Components
  const FeedTitles = feed.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div id="result">
      <div className="container">
        <WordCloud
          data={data}
          width={cloudSizeInPixels}
          height={cloudSizeInPixels}
          font="Lato"
          fontSize={(word) => Math.log2(word.value) * fontScale}
        />
        <section className="controls">
          <h2>Controls</h2>
          <label className="input-field">
            Minium ocurrences: {minium}/10
            <br />
            <input
              type="range"
              min="1"
              max="10"
              value={minium}
              onChange={(event) => setMinimum(Number(event.target.value))}
            />
          </label>
          <label className="input-field">
            <input
              type="checkbox"
              checked={hasCommonWords}
              onChange={() => setHasCommonWords(!hasCommonWords)}
            />
            Exclude common words (and, or, the, etc.)
          </label>
        </section>
        <section className="feed">
          <h2>Original RSS feed</h2>
          <ol>{FeedTitles}</ol>
        </section>
      </div>
    </div>
  );
}
