import type { ColorRoles } from "./roles";

export function createColorTokens(roles: ColorRoles) {
    return Object.fromEntries(
        Object.entries(roles).map(([name, value]) => [
            name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
            value,
        ])
    ) as Record<string, string>;
}