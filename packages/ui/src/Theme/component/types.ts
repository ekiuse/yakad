import type { buttonTokens } from "./Button";
import type { appBarTokens } from "./AppBar";
import type { cardTokens } from "./Card";


export type ButtonTokens = typeof buttonTokens;

export type ButtonSize = keyof typeof buttonTokens.sizes;

export type ButtonVariant = keyof typeof buttonTokens.variants;

export type ButtonShape =
    (typeof buttonTokens.shape.alternatives)[number];


import type {
    textFieldTokens,
} from "./TextField";

export type TextFieldTokens = typeof textFieldTokens;
export type TextFieldVariant = keyof typeof textFieldTokens;
export type AppBarTokens = typeof appBarTokens;
export type CardTokens = typeof cardTokens;
export type CardVariant = keyof typeof cardTokens;