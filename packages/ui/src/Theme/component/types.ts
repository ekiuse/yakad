
import type { buttonTokens } from "./Button";
import type { appBarTokens } from "./AppBar";
import type { cardTokens } from "./Card";
import type { checkboxTokens } from "./CheckBox";
import type { textFieldTokens } from "./TextField";
import type { navigationBarTokens } from "./NavigationBar";
import type { radioTokens } from "./Radio/tokens";
import type { dividerTokens } from "./Divider/tokens";

export type ButtonTokens = typeof buttonTokens;
export type ButtonSize = keyof typeof buttonTokens.sizes;
export type ButtonVariant = keyof typeof buttonTokens.variants;
export type ButtonShape = (typeof buttonTokens.shape.alternatives)[number];

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

export type NavigationBarTokens = typeof navigationBarTokens;

export type RadioTokens = typeof radioTokens;

export type DividerTokens = typeof dividerTokens;
