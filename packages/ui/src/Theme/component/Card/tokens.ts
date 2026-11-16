
const cardCommonTokens = {
    container: {
        shape: "medium",
        shadowColor: "shadow",
        surfaceTintLayerColor: "surfaceTint",
    },
    content: {
        color: "onSurface",
    },
    focus: {
        indicator: {
            color: "secondary",
            thickness: "focusIndicatorThickness",
            offset: "focusIndicatorOuterOffset",
        },
    },
} as const;

const cardStateLayer = {
    color: "onSurface",
} as const;

export const cardTokens = {
    elevated: {
        ...cardCommonTokens,
        container: {
            ...cardCommonTokens.container,
            color: "surfaceContainerLow",
            elevation: "level1",
        },
        hover: {
            containerElevation: "level2",
            stateLayer: {
                ...cardStateLayer,
                opacity: "hover",
            },
        },
        focus: {
            ...cardCommonTokens.focus,
            containerElevation: "level1",
            stateLayer: {
                ...cardStateLayer,
                opacity: "focus",
            },
        },
        pressed: {
            containerElevation: "level1",
            stateLayer: {
                ...cardStateLayer,
                opacity: "pressed",
            },
        },
        dragged: {
            containerElevation: "level4",
            stateLayer: {
                ...cardStateLayer,
                opacity: "dragged",
            },
        },
        disabled: {
            container: {
                color: "surface",
                opacity: 0.38,
                elevation: "level1",
            },
            content: {
                opacity: 0.38,
            },
        },
    },

    filled: {
        ...cardCommonTokens,
        container: {
            ...cardCommonTokens.container,
            color: "surfaceContainerHighest",
            elevation: "level0",
        },
        icon: {
            color: "primary",
            size: 24,
        },
        hover: {
            containerElevation: "level1",
            stateLayer: {
                ...cardStateLayer,
                opacity: "hover",
            },
        },
        focus: {
            ...cardCommonTokens.focus,
            containerElevation: "level0",
            stateLayer: {
                ...cardStateLayer,
                opacity: "focus",
            },
        },
        pressed: {
            containerElevation: "level0",
            stateLayer: {
                ...cardStateLayer,
                opacity: "pressed",
            },
        },
        dragged: {
            containerElevation: "level3",
            stateLayer: {
                ...cardStateLayer,
                opacity: "dragged",
            },
        },
        disabled: {
            container: {
                color: "onSurface",
                opacity: 0.38,
                elevation: "level0",
            },
            content: {
                opacity: 0.38,
            },
        },
    },

    outlined: {
        ...cardCommonTokens,
        container: {
            ...cardCommonTokens.container,
            color: "surface",
            elevation: "level0",
        },
        outline: {
            color: "outlineVariant",
            width: 1,
        },
        hover: {
            containerElevation: "level0",
            outlineColor: "outlineVariant",
            stateLayer: {
                ...cardStateLayer,
                opacity: "hover",
            },
        },
        focus: {
            ...cardCommonTokens.focus,
            containerElevation: "level0",
            stateLayer: {
                ...cardStateLayer,
                opacity: "focus",
            },
            outlineColor: "onSurface",
        },
        pressed: {
            containerElevation: "level0",
            outlineColor: "outlineVariant",
            stateLayer: {
                ...cardStateLayer,
                opacity: "pressed",
            },
        },
        dragged: {
            containerElevation: "level3",
            outlineColor: "outlineVariant",
            stateLayer: {
                ...cardStateLayer,
                opacity: "dragged",
            },
        },
        disabled: {
            container: {
                elevation: "level0",
            },
            content: {
                opacity: 0.38,
            },
            outline: {
                color: "outline",
                opacity: 0.38,
            },
        },
    },
} as const;
