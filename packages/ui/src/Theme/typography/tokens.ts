export const typefaceTokens = {
    brand: "Roboto, sans-serif",
    plain: "Roboto, sans-serif",
} as const;

export type TypefaceToken = keyof typeof typefaceTokens;

export const typographyTokens = {
    display: {
        large: {
            fontFamily: "brand",
            fontSize: "3.5625rem",
            lineHeight: "4rem",
            fontWeight: 400,
            letterSpacing: "-0.015625rem",
        },
        medium: {
            fontFamily: "brand",
            fontSize: "2.8125rem",
            lineHeight: "3.25rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        small: {
            fontFamily: "brand",
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
    },
    headline: {
        large: {
            fontFamily: "brand",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        medium: {
            fontFamily: "brand",
            fontSize: "1.75rem",
            lineHeight: "2.25rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        small: {
            fontFamily: "brand",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
    },
    title: {
        large: {
            fontFamily: "brand",
            fontSize: "1.375rem",
            lineHeight: "1.75rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        medium: {
            fontFamily: "plain",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            letterSpacing: "0.009375rem",
        },
        small: {
            fontFamily: "plain",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            letterSpacing: "0.00625rem",
        },
    },
    body: {
        large: {
            fontFamily: "plain",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.03125rem",
        },
        medium: {
            fontFamily: "plain",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 400,
            letterSpacing: "0.015625rem",
        },
        small: {
            fontFamily: "plain",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: 400,
            letterSpacing: "0.025rem",
        },
    },
    label: {
        large: {
            fontFamily: "plain",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            letterSpacing: "0.00625rem",
        },
        medium: {
            fontFamily: "plain",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: 500,
            letterSpacing: "0.03125rem",
        },
        small: {
            fontFamily: "plain",
            fontSize: "0.6875rem",
            lineHeight: "1rem",
            fontWeight: 500,
            letterSpacing: "0.03125rem",
        },
    },
} as const;

export type TypographyTokens = typeof typographyTokens;
export type TypographyRole = keyof TypographyTokens;
export type TypographySize<R extends TypographyRole> =
    keyof TypographyTokens[R];