
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
import { radioTokens } from "./Radio/tokens";
import { dividerTokens } from "./Divider/tokens";

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

function resolveElevationToken(level: string): string {
    return `var(--md-sys-elevation-${level})`;
}

function resolveTypographyToken(role: string) {
    const typographyRole = role.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`
    );

    const prefix = `--md-sys-typescale-${typographyRole}`;

    return {
        font: `var(${prefix}-font)`,
        size: `var(${prefix}-size)`,
        lineHeight: `var(${prefix}-line-height)`,
        weight: `var(${prefix}-weight)`,
        tracking: `var(${prefix}-tracking)`,
    };
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

            if (key === "typography") {
                return [key, resolveTypographyToken(value)];
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
                return [
                    key,
                    "var(--md-sys-state-focus-indicator-thickness)",
                ];
            }

            if (key === "offset") {
                return [
                    key,
                    "var(--md-sys-state-focus-indicator-outer-offset)",
                ];
            }

            return [key, value];
        })
    );
}

export const checkboxCssTokens = resolveComponentTokens(checkboxTokens);

export const navigationBarCssTokens =
    resolveComponentTokens(navigationBarTokens);

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
    small: resolveComponentTokens(appBarTokens.small),
    centerAligned: resolveComponentTokens(appBarTokens.centerAligned),
    medium: resolveComponentTokens(appBarTokens.medium),
    large: resolveComponentTokens(appBarTokens.large),
} as const;

export const radioCssTokens = resolveComponentTokens(radioTokens);

export const dividerCssTokens = {
    color: resolveColorToken(dividerTokens.color),
    thickness: dividerTokens.thickness,
} as const;

export const componentCssTokens = {
    button: buttonCssTokens,
    textField: textFieldCssTokens,
    appBar: appBarCssTokens,
    card: cardCssTokens,
    checkbox: checkboxCssTokens,
    navigationBar: navigationBarCssTokens,
    radio: radioCssTokens,
    divider: dividerCssTokens,
} as const;
