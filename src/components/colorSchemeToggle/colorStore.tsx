
let currentColorScheme: "light" | "dark" = "light";

export function setCurrentColorScheme(scheme: "light" | "dark") {
  currentColorScheme = scheme;
}

export function getCurrentColorScheme() {
  return currentColorScheme;
}
