export type CssTokenValue = string | number;

export type CssVariables = Record<string, CssTokenValue>;

export function toKebabCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function createCssVariables(variables: CssVariables): string {
    return Object.entries(variables)
        .map(([name, value]) => `    ${name}: ${value};`)
        .join("\n");
}

export function createCssRule(
    selector: string,
    variables: CssVariables
): string {
    const declarations = createCssVariables(variables);

    return `${selector} {\n${declarations}\n}`;
}

export function flattenTokens(
    tokens: Record<string, unknown>,
    prefix: string
): CssVariables {
    const variables: CssVariables = {};

    const visit = (value: unknown, path: string[]) => {
        if (value === null || value === undefined) {
            return;
        }

        if (Array.isArray(value)) {
            throw new TypeError(
                `Array token is not supported: ${path.join("-")}`
            );
        }

        if (typeof value === "object") {
            for (const [key, nestedValue] of Object.entries(value)) {
                visit(nestedValue, [...path, toKebabCase(key)]);
            }

            return;
        }

        if (
            typeof value === "string" ||
            (typeof value === "number" && Number.isFinite(value))
        ) {
            variables[`${prefix}-${path.join("-")}`] = value;
            return;
        }

        throw new TypeError(
            `Unsupported token value at "${path.join("-")}": ${String(value)}`
        );
    };

    for (const [key, value] of Object.entries(tokens)) {
        visit(value, [toKebabCase(key)]);
    }

    return variables;
}