import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { CssVariables } from "../utils/css";
import { createCssRule } from "../utils/css";
import { createColorTokens } from "./tokens";
import { darkColorRoles, lightColorRoles } from "./roles";

function createColorVariables(
    roles: typeof lightColorRoles
): CssVariables {
    const tokens = createColorTokens(roles);

    return Object.fromEntries(
        Object.entries(tokens).map(([name, value]) => [
            `--md-sys-color-${name}`,
            value,
        ])
    );
}

const css = [
    createCssRule(":root", createColorVariables(lightColorRoles)),
    createCssRule(".dark", createColorVariables(darkColorRoles)),
].join("\n\n");

const output = resolve(
    process.cwd(),
    "dist/theme/color/colors.css"
);

mkdirSync(dirname(output), { recursive: true });

writeFileSync(output, `${css}\n`, "utf8");