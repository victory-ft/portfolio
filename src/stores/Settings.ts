import { writable } from "svelte/store";

export const section = writable({
  section: "home"
});

let initialTheme: string;

if (window.matchMedia) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    initialTheme = "dark";
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    initialTheme = "light";
  }
} else {
  initialTheme = "light";
}

const storedTheme: string = sessionStorage.getItem("theme") || initialTheme;

export const theme = writable(storedTheme);

theme.subscribe((value) => {
  sessionStorage.setItem("theme", value === "dark" ? "dark" : "light");
});
