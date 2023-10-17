// Project files
import iWordCloudFormat from "../interfaces/iWordCloudFormat";
import rWordCount from "../interfaces/rWordCount";
import countRefences from "./countReferences";
import filterByMinimumValue from "./filterByMinimumValue";
import filterByWords from "./filterByWords";
import formatReferences from "./formatReferences";

/**
 * Note:
 * If I had more time i will refactor this method. It is a common "code smell" 💩
 * that a method has more than 3 arguments:
 * - This method is doing too much.
 * - We aren't storing/memoizing the data from listToText to filteredWords, so we can optimize this part.
 */
export default function makeWorldCloud(
  data: string[],
  bannedWords: string[],
  hasBanWords: boolean,
  ocurrences: number
) {
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
