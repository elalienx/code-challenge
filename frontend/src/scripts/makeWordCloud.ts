// Project files
import iWordCloudFormat from "../interfaces/iWordCloudFormat";
import rWordCount from "../interfaces/rWordCount";
import countReferences from "./countReferences";
import filterByMinimumValue from "./filterByMinimumValue";
import filterByWords from "./filterByWords";
import formatReferences from "./formatReferences";

/**
 * Note:
 * This has been refactored to focus on perfomance over readibily.
 *
 * With even more time it could be improved but never match the clarity
 * of the unoptimized version.
 */
export function parseWords(data: string[]) {
  const listToText: string = data.join();
  const removeCommas: string = listToText.replaceAll(",", "");
  const textToWordList: string[] = removeCommas.split(" ");
  const result: rWordCount = countReferences(textToWordList);

  return result;
}

export function filterWords(allWords: rWordCount, bannedWords: string[]) {
  return filterByWords(allWords, bannedWords);
}

export function formatWords(words: rWordCount, ocurrences: number) {
  const minimumWords: rWordCount = filterByMinimumValue(words, ocurrences);
  const result: iWordCloudFormat[] = formatReferences(minimumWords);

  return result;
}
