// Node modules
import WordCloud from "react-d3-cloud";
import iWordCloudFormat from "../interfaces/iWordCloudFormat";

interface iProps {
  data: iWordCloudFormat[];
}

export default function WordCloudWrapper({ data }: iProps) {
  // Properties
  const sizeInPixels = 300;
  const fontScaleInPixels = 7.5;
  const fontFamily = "Lato";

  return (
    <WordCloud
      data={data}
      width={sizeInPixels}
      height={sizeInPixels}
      font={fontFamily}
      fontSize={(item) => Math.log2(item.value) * fontScaleInPixels}
    />
  );
}
