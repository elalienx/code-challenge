import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iProps {
  item: string;
}

export default function ItemFeed({ item }: iProps) {
  return (
    <article className="item-feed">
      <FontAwesomeIcon className="icon" icon={["fas", "newspaper"]} />
      <p>{item}</p>
    </article>
  );
}
