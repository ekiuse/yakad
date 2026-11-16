import * as React from "react";
import classNames from "classnames";
import { spacingTokens, type YakadSpacing } from "../../Types/spacing";
import styles from "./Grid.module.css";

export interface GridProps extends React.ComponentProps<"div"> {
    gap?: YakadSpacing;
}

export function Grid({
    gap = "medium",
    className,
    style,
    ...restProps
}: GridProps) {
    return (
        <div
            {...restProps}
            className={classNames(styles.grid, className)}
            style={{
                ...style,
                gap: spacingTokens[gap],
            }}
        />
    );
}

export interface GridItemSpan {
    compact?: number;
    medium?: number;
    expanded?: number;
}

export interface GridItemProps extends React.ComponentProps<"div"> {
    span?: number | GridItemSpan;
}

function normalizeSpan(
    value: number | undefined,
    fallback: number,
    maximum: number,
) {
    if (value === undefined || !Number.isFinite(value)) {
        return fallback;
    }

    return Math.min(maximum, Math.max(1, Math.floor(value)));
}

export function GridItem({
    span,
    className,
    style,
    ...restProps
}: GridItemProps) {
    const spans = typeof span === "number"
        ? {
            compact: normalizeSpan(span, 4, 4),
            medium: normalizeSpan(span, 8, 8),
            expanded: normalizeSpan(span, 12, 12),
        }
        : {
            compact: normalizeSpan(span?.compact, 4, 4),
            medium: normalizeSpan(span?.medium, 8, 8),
            expanded: normalizeSpan(span?.expanded, 12, 12),
        };

    const itemStyle = {
        ...style,
        "--grid-span-compact": spans.compact,
        "--grid-span-medium": spans.medium,
        "--grid-span-expanded": spans.expanded,
    } as React.CSSProperties;

    return (
        <div
            {...restProps}
            className={classNames(styles.gridItem, className)}
            style={itemStyle}
        />
    );
}