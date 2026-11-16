import { SchemeExpressive } from "@material/material-color-utilities";
import { sourceHct } from "./hct";

export const colorSpecVersion = "2025" as const;
export const colorPlatform = "phone" as const;
export const colorContrastLevel = 0;

export const lightScheme = new SchemeExpressive(
    sourceHct,
    false,
    colorContrastLevel,
    colorSpecVersion,
    colorPlatform
);

export const darkScheme = new SchemeExpressive(
    sourceHct,
    true,
    colorContrastLevel,
    colorSpecVersion,
    colorPlatform
);