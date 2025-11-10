import { horizontalScrollController } from "./horizontalScroll";

export function goToSection(id) {
  if (!horizontalScrollController) return;

  const el = document.getElementById(id);
  if (!el) return;

  horizontalScrollController(el.offsetLeft);
}
