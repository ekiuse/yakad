export const radioTokens = {
    iconSize: "20px",
    stateLayerSize: "40px",

    iconColor: "onSurfaceVariant",
    selectedIconColor: "primary",

    disabled: {
        selected: {
            iconColor: "onSurface",
            iconOpacity: 0.38,
        },
        unselected: {
            iconColor: "onSurface",
            iconOpacity: 0.38,
        },
    },

    hover: {
        iconColor: "onSurface",
        stateLayer: {
            color: "onSurface",
            opacity: "hover",
        },
    },

    selectedHover: {
        iconColor: "primary",
        stateLayer: {
            color: "primary",
            opacity: "hover",
        },
    },

    focusIconColor: "onSurface",
    selectedFocusIconColor: "primary",

    pressed: {
        iconColor: "onSurface",
        stateLayer: {
            color: "primary",
            opacity: "pressed",
        },
    },

    selectedPressed: {
        iconColor: "primary",
        stateLayer: {
            color: "onSurface",
            opacity: "pressed",
        },
    },
} as const;

export type RadioTokens = typeof radioTokens;
