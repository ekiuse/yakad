import { hexFromArgb } from "@material/material-color-utilities";
import type { SchemeExpressive } from "@material/material-color-utilities";
import { darkScheme, lightScheme } from "./scheme";

type NumericKeys<T> = {
    [Key in keyof T]-?: T[Key] extends number ? Key : never;
}[keyof T];

type SchemeMetadataKey =
    | "background"
    | "onBackground"
    | "surfaceVariant"
    | "contrastLevel"
    | "sourceColorArgb"
    | "variant"
    | "primaryPaletteKeyColor"
    | "secondaryPaletteKeyColor"
    | "tertiaryPaletteKeyColor"
    | "neutralPaletteKeyColor"
    | "neutralVariantPaletteKeyColor"
    | "errorPaletteKeyColor";

export type ColorRole = Exclude<NumericKeys<SchemeExpressive>, SchemeMetadataKey>;

export const colorRoleNames = [
    "primary",
    "onPrimary",
    "primaryContainer",
    "onPrimaryContainer",
    "primaryDim",
    "primaryFixed",
    "primaryFixedDim",
    "onPrimaryFixed",
    "onPrimaryFixedVariant",

    "secondary",
    "onSecondary",
    "secondaryContainer",
    "onSecondaryContainer",
    "secondaryDim",
    "secondaryFixed",
    "secondaryFixedDim",
    "onSecondaryFixed",
    "onSecondaryFixedVariant",

    "tertiary",
    "onTertiary",
    "tertiaryContainer",
    "onTertiaryContainer",
    "tertiaryDim",
    "tertiaryFixed",
    "tertiaryFixedDim",
    "onTertiaryFixed",
    "onTertiaryFixedVariant",

    "error",
    "onError",
    "errorContainer",
    "onErrorContainer",
    "errorDim",

    "surface",
    "onSurface",
    "onSurfaceVariant",
    "surfaceDim",
    "surfaceBright",
    "surfaceContainerLowest",
    "surfaceContainerLow",
    "surfaceContainer",
    "surfaceContainerHigh",
    "surfaceContainerHighest",

    "outline",
    "outlineVariant",

    "inverseSurface",
    "inverseOnSurface",
    "inversePrimary",

    "surfaceTint",
    "shadow",
    "scrim",
] as const satisfies readonly ColorRole[];

export type ColorRoles = Record<ColorRole, string>;

type MissingColorRoles = Exclude<ColorRole, typeof colorRoleNames[number]>;
const missingColorRoles: Record<MissingColorRoles, never> = {};
void missingColorRoles;

export function getColorRoles(scheme: SchemeExpressive): ColorRoles {
    const roles = {} as ColorRoles;

    for (const role of colorRoleNames) {
        roles[role] = hexFromArgb(scheme[role]);
    }

    return roles;
}

export const lightColorRoles = getColorRoles(lightScheme);
export const darkColorRoles = getColorRoles(darkScheme);