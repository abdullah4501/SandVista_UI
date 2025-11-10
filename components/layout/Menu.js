import { goToSection } from "@/app/scrollToSection";

export default function Menu() {
  return (
    <ul className="main-menu__list">
      <li>
        <a
          href="#"
          data-section="home"
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
          data-section="about"
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
          data-section="contact"
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
