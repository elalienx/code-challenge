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
import InputCheckbox from "../components/InputCheckbox";
import InputSlider from "../components/InputSlider";

interface iProps {
  feed: string[];
}

export default function Results({ feed }: iProps) {
  // State
  const [ocurrences, setOcurrences] = useState(5);
  const [hasBanWords, setHasBanWords] = useState(false);

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
    const wordsToUse: rWordCount = hasBanWords ? filteredWords : allWords;
    const minWords: rWordCount = filterByMinimumValue(wordsToUse, ocurrences);
    const format: iWordCloudFormat[] = formatReferences(minWords);

    return format;
  }

  // Components
  const FeedTitles = feed.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div id="results">
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
