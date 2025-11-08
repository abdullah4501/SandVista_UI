// app/scrollToSection.js
export function goToSection(id) {
  console.log("goToSection triggered for:", id);
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const isDesktop = window.innerWidth > 992;
  const container = document.querySelector(".horizontal-scroll");

  if (!isDesktop || !container) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const x = el.offsetLeft;
  // now targetRef.current updates automatically
  container.scrollTo({ left: x, behavior: "smooth" });
}
