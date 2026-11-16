
const smallAppBarTokens = {
    container: {
        color: "surface",
        elevation: "level0",
        height: 64,
        shape: "none",
    },
    headline: {
        color: "onSurface",
        typography: "titleLarge",
    },
    leadingIcon: {
        color: "onSurface",
        size: 24,
    },
    trailingIcon: {
        color: "onSurfaceVariant",
        size: 24,
    },
    onScroll: {
        containerElevation: "level2",
    },
} as const;

export const appBarTokens = {
    small: smallAppBarTokens,
    centerAligned: smallAppBarTokens,
    medium: {
        container: {
            color: "surface",
            elevation: "level0",
            height: 112,
            shape: "none",
        },
        headline: {
            color: "onSurface",
            typography: "headlineSmall",
        },
        leadingIcon: {
            color: "onSurface",
            size: 24,
        },
        trailingIcon: {
            color: "onSurfaceVariant",
            size: 24,
        },
        onScroll: {
            containerElevation: "level2",
        },
    },
    large: {
        container: {
            color: "surface",
            elevation: "level0",
            height: 152,
            shape: "none",
        },
        headline: {
            color: "onSurface",
            typography: "headlineMedium",
        },
        leadingIcon: {
            color: "onSurface",
            size: 24,
        },
        trailingIcon: {
            color: "onSurfaceVariant",
            size: 24,
        },
        onScroll: {
            containerElevation: "level2",
        },
    },
} as const;
