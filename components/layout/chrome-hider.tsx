"use client";

import { useEffect } from "react";

export function ChromeHider() {
  useEffect(() => {
    const chrome = document.getElementById("site-chrome");
    if (!chrome) return;

    const elements = Array.from(chrome.children).filter(
      (el) => el.tagName !== "MAIN"
    ) as HTMLElement[];
    const previous = elements.map((el) => el.style.display);

    elements.forEach((el) => {
      el.style.display = "none";
    });

    return () => {
      elements.forEach((el, i) => {
        el.style.display = previous[i];
      });
    };
  }, []);

  return null;
}
