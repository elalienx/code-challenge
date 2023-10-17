// Project files
import Logo from "../assets/logo-white.png";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <img className="logo" src={Logo} />
      <span className="separator">|</span>
      <span className="wordmark">Word Cloud</span>
    </nav>
  );
}
