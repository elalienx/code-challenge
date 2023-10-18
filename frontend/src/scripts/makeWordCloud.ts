// Project files
import iWordCloudFormat from "../interfaces/iWordCloudFormat";
import rWordCount from "../interfaces/rWordCount";
import countReferences from "./utilities/countReferences";
import filterByMinimumValue from "./utilities/filterByMinimumValue";
import filterByWords from "./utilities/filterByWords";
import formatReferences from "./utilities/formatReferences";

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
