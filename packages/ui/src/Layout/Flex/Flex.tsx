import * as React from "react";
import classNames from "classnames";
import { spacingTokens, type YakadSpacing } from "../../Types/spacing";
import styles from "./Flex.module.css";

export type FlexAlign =
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "baseline";

export type FlexJustify =
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";

export interface FlexProps extends React.ComponentProps<"div"> {
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: YakadSpacing;
    wrap?: boolean;
}

interface FlexBoxProps extends FlexProps {
    direction: "row" | "column";
}

function FlexBox({
    direction,
    align = "stretch",
    justify = "start",
    gap = "medium",
    wrap = false,
    className,
    style,
    ...restProps
}: FlexBoxProps) {
    return (
        <div
            {...restProps}
            className={classNames(styles.flex, className)}
            data-direction={direction}
            data-align={align}
            data-justify={justify}
            data-wrap={wrap}
            style={{
                ...style,
                gap: spacingTokens[gap],
            }}
        />
    );
}

export function Row(props: FlexProps) {
    return <FlexBox {...props} direction="row" />;
}

export function Stack(props: FlexProps) {
    return <FlexBox {...props} direction="column" />;
}