
export const shapeTokens = {
    none: "0rem",
    extraSmall: "0.25rem",
    small: "0.5rem",
    medium: "0.75rem",
    large: "1rem",
    largeIncreased: "1.25rem",
    extraLarge: "1.75rem",
    extraLargeIncreased: "2rem",
    extraExtraLarge: "3rem",
    full: "9999px",
} as const;

export type ShapeTokens = typeof shapeTokens;
export type ShapeToken = keyof ShapeTokens;
