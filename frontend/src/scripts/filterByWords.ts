import rWordCount from "../interfaces/rWordCount";

export default function filterByWords(words: rWordCount, banWords: string[]) {
  const result = { ...words };

  for (const key of banWords) {
    delete result[key];
  }

  return result;
}
