
export const checkboxTokens = {
    container: {
        size: 18,
        shape: 2,
    },
    icon: {
        size: 18,
    },
    stateLayer: {
        size: 40,
        shape: "full",
    },
    touchTarget: {
        size: 48,
    },
    focusIndicator: {
        color: "secondary",
        thickness: "focusIndicatorThickness",
        offset: "focusIndicatorOuterOffset",
    },
    unselected: {
        outline: {
            color: "onSurfaceVariant",
            width: 2,
        },
        hover: {
            outline: {
                color: "onSurface",
                width: 2,
            },
            stateLayer: {
                color: "onSurface",
                opacity: "hover",
            },
        },
        focus: {
            outline: {
                color: "onSurface",
                width: 2,
            },
            stateLayer: {
                color: "onSurface",
                opacity: "focus",
            },
        },
        pressed: {
            outline: {
                color: "onSurface",
                width: 2,
            },
            stateLayer: {
                color: "primary",
                opacity: "pressed",
            },
        },
        disabled: {
            outline: {
                color: "onSurface",
                width: 2,
            },
            container: {
                opacity: 0.38,
            },
        },
    },
    selected: {
        container: {
            color: "primary",
        },
        outline: {
            width: 0,
        },
        icon: {
            color: "onPrimary",
        },
        hover: {
            container: {
                color: "primary",
            },
            outline: {
                width: 0,
            },
            icon: {
                color: "onPrimary",
            },
            stateLayer: {
                color: "primary",
                opacity: "hover",
            },
        },
        focus: {
            container: {
                color: "primary",
            },
            outline: {
                width: 0,
            },
            icon: {
                color: "onPrimary",
            },
            stateLayer: {
                color: "primary",
                opacity: "focus",
            },
        },
        pressed: {
            container: {
                color: "primary",
            },
            outline: {
                width: 0,
            },
            icon: {
                color: "onPrimary",
            },
            stateLayer: {
                color: "onSurface",
                opacity: "pressed",
            },
        },
        disabled: {
            container: {
                color: "onSurface",
                opacity: 0.38,
            },
            outline: {
                width: 0,
            },
            icon: {
                color: "surface",
            },
        },
    },
    error: {
        stateLayer: {
            hover: {
                color: "error",
                opacity: "hover",
            },
            focus: {
                color: "error",
                opacity: "focus",
            },
            pressed: {
                color: "error",
                opacity: "pressed",
            },
        },
        unselected: {
            outline: {
                color: "error",
                width: 2,
            },
            hover: {
                outline: {
                    color: "error",
                    width: 2,
                },
            },
            focus: {
                outline: {
                    color: "error",
                    width: 2,
                },
            },
            pressed: {
                outline: {
                    color: "error",
                    width: 2,
                },
            },
        },
        selected: {
            container: {
                color: "error",
            },
            outline: {
                width: 0,
            },
            icon: {
                color: "onError",
            },
            hover: {
                container: {
                    color: "error",
                },
                icon: {
                    color: "onError",
                },
            },
            focus: {
                container: {
                    color: "error",
                },
                icon: {
                    color: "onError",
                },
            },
            pressed: {
                container: {
                    color: "error",
                },
                icon: {
                    color: "onError",
                },
            },
        },
    },
} as const;
