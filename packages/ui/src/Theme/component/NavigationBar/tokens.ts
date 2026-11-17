export const navigationBarTokens = {
    common: {
        container: {
            color: "surfaceContainer",
            elevation: "level2",
            shadowColor: "shadow",
            height: 64,
            shape: "none",
        },
        item: {
            betweenSpace: 0,
            icon: {
                size: 24,
            },
            activeIndicator: {
                color: "secondaryContainer",
                shape: "full",
                iconLabelSpace: 4,
            },
            active: {
                icon: {
                    color: "onSecondaryContainer",
                },
                labelText: {
                    color: "secondary",
                },
                hovered: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                        opacity: "hover",
                    },
                },
                focused: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                        opacity: "focus",
                    },
                },
                pressed: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                        opacity: "pressed",
                    },
                },
            },
            inactive: {
                icon: {
                    color: "onSurfaceVariant",
                },
                labelText: {
                    color: "onSurfaceVariant",
                },
                hovered: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                    },
                },
                focused: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                    },
                },
                pressed: {
                    stateLayer: {
                        color: "onSecondaryContainer",
                    },
                },
            },
        },
    },
    vertical: {
        labelText: {
            font: "labelMedium",
        },
        activeIndicator: {
            height: 32,
            width: 56,
            iconLabelSpace: 4,
        },
        container: {
            betweenSpace: 6,
        },
    },
    horizontal: {
        labelText: {
            font: "labelMedium",
        },
        activeIndicator: {
            height: 40,
            leadingSpace: 16,
            trailingSpace: 16,
            iconLabelSpace: 4,
        },
    },
} as const;

export type NavigationBarTokens = typeof navigationBarTokens;