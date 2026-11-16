
import { elevationTokens } from "./elevation/tokens";
import { layoutTokens } from "./layout/tokens";
import { motionTokens } from "./motion/tokens";
import { shapeTokens } from "./shape/tokens";
import { stateTokens } from "./state/tokens";
import { typographyTokens, typefaceTokens } from "./typography/tokens";
import { componentCssTokens } from "./component/css-tokens";

export const themeTokens = {
    typography: {
        typeface: typefaceTokens,
        scale: typographyTokens,
    },
    shape: shapeTokens,
    elevation: elevationTokens,
    motion: motionTokens,
    state: stateTokens,
    layout: layoutTokens,
    component: componentCssTokens,
} as const;

export type ThemeTokens = typeof themeTokens;
