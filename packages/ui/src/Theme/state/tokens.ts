
export const stateTokens = {
    hover: {
        stateLayerOpacity: 0.08,
    },
    focus: {
        stateLayerOpacity: 0.1,
    },
    pressed: {
        stateLayerOpacity: 0.1,
    },
    dragged: {
        stateLayerOpacity: 0.16,
    },
    disabled: {
        stateLayerOpacity: 0,
        contentOpacity: 0.38,
        containerOpacity: 0.12,
    },
    focusIndicator: {
        thickness: 3,
        outerOffset: 2,
    },
} as const;

export type StateTokens = typeof stateTokens;

export type InteractiveState = Exclude<
    keyof StateTokens,
    "disabled" | "focusIndicator"
>;
