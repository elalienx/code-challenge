// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Logo from "../assets/logo-white.png";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <img className="logo" src={Logo} />
      <span>|</span>
      <FontAwesomeIcon icon={["fas", "language"]} />
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>Word Cloud</span>
    </nav>
  );
}
