// Node modules
import { useMemo } from "react";

// Project files
import ItemFeed from "./ItemFeed";

interface iProps {
  feed: string[];
}

export default function MemoFeed({ feed }: iProps) {
  // Methods
  function createFeed(feed: string[]) {
    const result = feed.map((item, index) => (
      <ItemFeed key={index} item={item} />
    ));

    return result;
  }

  // Components
  const Items = useMemo(() => createFeed(feed), []);

  return <>{Items}</>;
}
