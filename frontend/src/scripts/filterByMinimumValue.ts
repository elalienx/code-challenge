// Project files
import rWordCount from "../interfaces/rWordCount";

export default function filterByMinimumValue(count: rWordCount, min: number) {
  const result: rWordCount = {};

  for (const key in count) {
    if (count[key] >= min) {
      result[key] = count[key];
    }
  }
  return result;
}
