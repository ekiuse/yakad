import type { buttonTokens } from "./Button";
import type { appBarTokens } from "./AppBar";
import type { cardTokens } from "./Card";
import type { checkboxTokens } from "./CheckBox";



export type ButtonTokens = typeof buttonTokens;

export type ButtonSize = keyof typeof buttonTokens.sizes;

export type ButtonVariant = keyof typeof buttonTokens.variants;

export type ButtonShape =
    (typeof buttonTokens.shape.alternatives)[number];


import type {
    textFieldTokens,
} from "./TextField";
import { navigationBarTokens } from "./NavigationBar";

export type TextFieldTokens = typeof textFieldTokens;
export type TextFieldVariant = keyof typeof textFieldTokens;
export type AppBarTokens = typeof appBarTokens;
export type CardTokens = typeof cardTokens;
export type CardVariant = keyof typeof cardTokens;
export type CheckboxTokens = typeof checkboxTokens;

export type CheckboxSelectionState =
    | "unselected"
    | "selected"
    | "indeterminate";

export type {
    navigationBarTokens
}
    from "./NavigationBar"

export type NavigationBar = typeof navigationBarTokens
