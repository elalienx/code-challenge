// Project files
import rWordCount from "../../interfaces/rWordCount";

export default function formatReferences(object: rWordCount) {
  return Object.entries(object).map(([text, value]) => ({
    text,
    value,
  }));
}
