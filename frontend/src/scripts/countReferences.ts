// Project files
import rWordCount from "../interfaces/rWordCount";

export default function countReferences(array: string[]): rWordCount {
  const result: rWordCount = {};

  array.forEach((value) => {
    result[value] = (result[value] || 0) + 1;
  });

  return result;
}
