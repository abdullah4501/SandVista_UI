import { goToSection } from "@/app/scrollToSection";

export default function Menu() {
  return (
    <ul className="main-menu__list">
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToSection("home");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToSection("about");
            
          }}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToSection("contact");
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
