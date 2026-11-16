export type YakadSpacing =
    | "none"
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "extra-extra-large"
    | "section"
    | "page";

export const spacingTokens: Record<YakadSpacing, string> = {
    none: "var(--yakad-spacing-none)",
    "extra-small": "var(--yakad-spacing-extra-small)",
    small: "var(--yakad-spacing-small)",
    medium: "var(--yakad-spacing-medium)",
    large: "var(--yakad-spacing-large)",
    "extra-large": "var(--yakad-spacing-extra-large)",
    "extra-extra-large": "var(--yakad-spacing-extra-extra-large)",
    section: "var(--yakad-spacing-section)",
    page: "var(--yakad-spacing-page)",
};