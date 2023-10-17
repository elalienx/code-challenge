// Note: I usually do not add comments to describe the fields, instead I use better names, but the pluging itslef uses this name convention.
export default interface iWordCloudFormat {
  text: string; // the word itself
  value: number; // the ocurrences (frequence) of the word
}
