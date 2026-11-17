
import {
    buttonSizeTokens,
    buttonVariantTokens,
    buttonTokens,
} from "./Button/tokens";

import {
    textFieldCommonTokens,
    filledTextFieldTokens,
    outlinedTextFieldTokens,
} from "./TextField/tokens";

import { appBarTokens } from "./AppBar/tokens";
import { cardTokens } from "./Card/tokens";
import { checkboxTokens } from "./CheckBox/tokens";
import { navigationBarTokens } from "./NavigationBar/tokens";

const buttonVariantCssTokens = Object.fromEntries(
    Object.entries(buttonVariantTokens).map(([variant, tokens]) => {
        const { elevation, ...rest } = tokens;

        return [
            variant,
            {
                ...rest,
                elevation: Object.fromEntries(
                    Object.entries(elevation).map(([state, level]) => [
                        state,
                        `var(--md-sys-elevation-${level})`,
                    ])
                ),
            },
        ];
    })
);

const textFieldCommonKeys = [
    "containerHeight",
    "minWidth",
    "inputTypography",
    "labelTypography",
    "supportingTypography",
    "leadingIconSize",
    "trailingIconSize",
] as const;

function removeTextFieldCommonTokens<
    T extends Record<string, unknown>
>(tokens: T) {
    const result = { ...tokens };

    for (const key of textFieldCommonKeys) {
        delete result[key];
    }

    return result;
}

const filledTextFieldCssTokens = {
    ...removeTextFieldCommonTokens(filledTextFieldTokens),
    container: {
        ...filledTextFieldTokens.container,
        shape: "var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0",
    },
};

const outlinedTextFieldCssTokens = {
    ...removeTextFieldCommonTokens(outlinedTextFieldTokens),
    container: {
        ...outlinedTextFieldTokens.container,
        shape: "var(--md-sys-shape-corner-extra-small)",
    },
};

function resolveColorToken(color: string): string {
    return `var(--md-sys-color-${color.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)})`;
}

function resolveShapeToken(shape: string): string {
    return `var(--md-sys-shape-corner-${shape.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)})`;
}

function resolveComponentTokens(
    tokens: Record<string, unknown>
): Record<string, unknown> {
    return Object.fromEntries(
        Object.entries(tokens).map(([key, value]) => {
            if (value !== null && typeof value === "object") {
                return [
                    key,
                    resolveComponentTokens(value as Record<string, unknown>),
                ];
            }

            if (typeof value !== "string") {
                return [key, value];
            }

            if (key === "color" || key.endsWith("Color")) {
                return [key, resolveColorToken(value)];
            }

            if (key === "elevation" || key.endsWith("Elevation")) {
                return [key, resolveElevationToken(value)];
            }

            if (key === "shape") {
                return [key, resolveShapeToken(value)];
            }
            if (key === "font") {
                const typographyRole = value.replace(
                    /[A-Z]/g,
                    (letter) => `-${letter.toLowerCase()}`
                );

                return [
                    key,
                    `var(--md-sys-typescale-${typographyRole}-font)`,
                ];
            }

            if (key === "opacity") {
                return [
                    key,
                    `var(--md-sys-state-${value}-state-layer-opacity)`,
                ];
            }

            if (key === "thickness") {
                return [key, "var(--md-sys-state-focus-indicator-thickness)"];
            }

            if (key === "offset") {
                return [key, "var(--md-sys-state-focus-indicator-outer-offset)"];
            }

            return [key, value];
        })
    );
}

export const checkboxCssTokens = resolveComponentTokens(checkboxTokens);
export const navigationBarCssTokens =
    resolveComponentTokens(navigationBarTokens);

function resolveElevationToken(level: string): string {
    return `var(--md-sys-elevation-${level})`;
}

function createAppBarCssTokens(
    tokens: (typeof appBarTokens)[keyof typeof appBarTokens]
) {
    return {
        ...tokens,
        container: {
            ...tokens.container,
            color: resolveColorToken(tokens.container.color),
            elevation: resolveElevationToken(tokens.container.elevation),
        },
        headline: {
            ...tokens.headline,
            color: resolveColorToken(tokens.headline.color),
        },
        leadingIcon: {
            ...tokens.leadingIcon,
            color: resolveColorToken(tokens.leadingIcon.color),
        },
        trailingIcon: {
            ...tokens.trailingIcon,
            color: resolveColorToken(tokens.trailingIcon.color),
        },
        onScroll: {
            ...tokens.onScroll,
            containerElevation: resolveElevationToken(
                tokens.onScroll.containerElevation
            ),
        },
    };
}

export const buttonCssTokens = {
    sizes: buttonSizeTokens,
    variants: buttonVariantCssTokens,
    typography: buttonTokens.typography,
    stateLayer: buttonTokens.stateLayer,
} as const;

export const textFieldCssTokens = {
    ...textFieldCommonTokens,
    filled: filledTextFieldCssTokens,
    outlined: outlinedTextFieldCssTokens,
} as const;

export const cardCssTokens = {
    elevatedCard: resolveComponentTokens(cardTokens.elevated),
    filledCard: resolveComponentTokens(cardTokens.filled),
    outlinedCard: resolveComponentTokens(cardTokens.outlined),
} as const;

export const appBarCssTokens = {
    small: createAppBarCssTokens(appBarTokens.small),
    centerAligned: createAppBarCssTokens(appBarTokens.centerAligned),
    medium: createAppBarCssTokens(appBarTokens.medium),
    large: createAppBarCssTokens(appBarTokens.large),
} as const;

export const componentCssTokens = {
    button: buttonCssTokens,
    textField: textFieldCssTokens,
    appBar: appBarCssTokens,
    card: cardCssTokens,
    checkbox: checkboxCssTokens,
    navigationBar: navigationBarCssTokens,
} as const;
