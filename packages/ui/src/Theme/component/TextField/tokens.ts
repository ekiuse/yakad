export const textFieldCommonTokens = {
    containerHeight: "56px",
    minWidth: "280px",
    inputTypography: "var(--md-sys-typescale-body-large-font)",
    labelTypography: "var(--md-sys-typescale-body-large-font)",
    supportingTypography: "var(--md-sys-typescale-body-small-font)",
    leadingIconSize: "24px",
    trailingIconSize: "24px",
} as const;

export const filledTextFieldTokens = {
    ...textFieldCommonTokens,

    container: {
        color: "var(--md-sys-color-surface-container-highest)",
        shape: "cornerExtraSmallTop",
    },

    indicator: {
        default: {
            color: "var(--md-sys-color-on-surface-variant)",
            height: "1px",
        },
        hovered: {
            color: "var(--md-sys-color-on-surface)",
            height: "1px",
        },
        focused: {
            color: "var(--md-sys-color-primary)",
            height: "2px",
        },
        disabled: {
            color: "var(--md-sys-color-on-surface)",
            height: "1px",
            opacity: 0.38,
        },
        error: {
            color: "var(--md-sys-color-error)",
        },
        errorFocused: {
            color: "var(--md-sys-color-error)",
        },
        errorHovered: {
            color: "var(--md-sys-color-on-error-container)",
        },
    },

    input: {
        color: "var(--md-sys-color-on-surface)",
        placeholderColor: "var(--md-sys-color-on-surface-variant)",
        prefixColor: "var(--md-sys-color-on-surface-variant)",
        suffixColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
    },

    label: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-primary)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
        errorHoveredColor: "var(--md-sys-color-on-error-container)",
    },

    supporting: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
        errorHoveredColor: "var(--md-sys-color-error)",
    },

    leadingIcon: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-on-surface-variant)",
        errorFocusedColor: "var(--md-sys-color-on-surface-variant)",
        errorHoveredColor: "var(--md-sys-color-on-surface-variant)",
    },

    trailingIcon: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
        errorHoveredColor: "var(--md-sys-color-on-error-container)",
    },

    caret: {
        color: "var(--md-sys-color-primary)",
        errorColor: "var(--md-sys-color-error)",
    },

    disabledContainer: {
        color: "var(--md-sys-color-on-surface)",
        opacity: 0.04,
    },
} as const;

export const outlinedTextFieldTokens = {
    ...textFieldCommonTokens,

    container: {
        color: "transparent",
        shape: "cornerExtraSmall",
    },

    outline: {
        default: {
            color: "var(--md-sys-color-outline)",
            width: "1px",
        },
        hovered: {
            color: "var(--md-sys-color-on-surface)",
            width: "1px",
        },
        focused: {
            color: "var(--md-sys-color-primary)",
            width: "2px",
        },
        disabled: {
            color: "var(--md-sys-color-on-surface)",
            width: "1px",
            opacity: 0.12,
        },
        error: {
            color: "var(--md-sys-color-error)",
        },
        errorFocused: {
            color: "var(--md-sys-color-error)",
        },
    },

    input: {
        color: "var(--md-sys-color-on-surface)",
        placeholderColor: "var(--md-sys-color-on-surface-variant)",
        prefixColor: "var(--md-sys-color-on-surface-variant)",
        suffixColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
    },

    label: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-primary)",
        hoveredColor: "var(--md-sys-color-on-surface)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
    },

    supporting: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
    },

    leadingIcon: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-on-surface-variant)",
        errorFocusedColor: "var(--md-sys-color-on-surface-variant)",
    },

    trailingIcon: {
        color: "var(--md-sys-color-on-surface-variant)",
        focusedColor: "var(--md-sys-color-on-surface-variant)",
        hoveredColor: "var(--md-sys-color-on-surface-variant)",
        disabledColor: "var(--md-sys-color-on-surface)",
        disabledOpacity: 0.38,
        errorColor: "var(--md-sys-color-error)",
        errorFocusedColor: "var(--md-sys-color-error)",
    },

    caret: {
        color: "var(--md-sys-color-primary)",
        errorColor: "var(--md-sys-color-error)",
    },
} as const;

export const textFieldTokens = {
    filled: filledTextFieldTokens,
    outlined: outlinedTextFieldTokens,
} as const;