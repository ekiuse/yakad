import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { themeTokens } from "./theme";
import { createCssRule, flattenTokens, type CssVariables } from "./utils/css";
import { typographyTokens, typefaceTokens } from "./typography/tokens";

function createTypographyVariables(): CssVariables {
    const variables: CssVariables = {
        "--md-ref-typeface-brand": typefaceTokens.brand,
        "--md-ref-typeface-plain": typefaceTokens.plain,
    };

    for (const [role, sizes] of Object.entries(typographyTokens)) {
        for (const [size, properties] of Object.entries(sizes)) {
            const prefix = `--md-sys-typescale-${role}-${size}`;

            variables[`${prefix}-font`] = `var(--md-ref-typeface-${properties.fontFamily})`;
            variables[`${prefix}-size`] = properties.fontSize;
            variables[`${prefix}-line-height`] = properties.lineHeight;
            variables[`${prefix}-weight`] = properties.fontWeight;
            variables[`${prefix}-tracking`] = properties.letterSpacing;
        }
    }

    return variables;
}


export function createThemeVariables(): CssVariables {
    const variables: CssVariables = {
        ...createTypographyVariables(),
        ...flattenTokens(themeTokens.shape, "--md-sys-shape-corner"),
        ...Object.fromEntries(
            Object.entries(themeTokens.elevation).map(([level, token]) => [
                `--md-sys-elevation-${level}`,
                token.shadow,
            ])
        ),
        ...Object.fromEntries(
            Object.entries(themeTokens.elevation).map(([level, token]) => [
                `--yakad-elevation-${level}-value`,
                token.value,
            ])
        ),
        ...flattenTokens(themeTokens.motion, "--yakad-motion"),
        ...flattenTokens(themeTokens.state, "--md-sys-state"),
        ...flattenTokens(themeTokens.layout.spacing, "--yakad-spacing"),
        ...flattenTokens(themeTokens.layout.breakpoint, "--yakad-breakpoint"),
        ...flattenTokens(
            themeTokens.component.button,
            "--md-comp-button"
        ),
        ...flattenTokens(
            themeTokens.component.textField,
            "--md-comp-text-field"
        ),
        ...flattenTokens(
            themeTokens.component.appBar,
            "--md-comp-top-app-bar"
        ),

        ...flattenTokens(
            themeTokens.component.card.elevatedCard,
            "--md-comp-elevated-card"
        ),
        ...flattenTokens(
            themeTokens.component.card.filledCard,
            "--md-comp-filled-card"
        ),
        ...flattenTokens(
            themeTokens.component.card.outlinedCard,
            "--md-comp-outlined-card"
        ),
        ...flattenTokens(
            themeTokens.component.checkbox,
            "--md-comp-checkbox"
        ),
        ...flattenTokens(
            themeTokens.component.navigationBar,
            "--md-comp-navigation-bar"
        ),
        ...flattenTokens(
            themeTokens.component.radio,
            "--md-comp-radio"
        ),
        ...flattenTokens(
            themeTokens.component.divider,
            "--md-comp-divider"
        ),
    };

    return variables;
}


export function generateThemeCss(): string {
    return `${createCssRule(":root", createThemeVariables())}\n`;
}

export function writeThemeCss(): string {
    const output = resolve(process.cwd(), "dist/theme/theme.css");
    const css = generateThemeCss();

    mkdirSync(dirname(output), { recursive: true });
    writeFileSync(output, css);

    return output;
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("/Theme/generator.ts")) {
    writeThemeCss();
}