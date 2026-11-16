import * as React from "react";
import classNames from "classnames";
import { spacingTokens, type YakadSpacing } from "../../Types/spacing";
import type { FlexAlign, FlexJustify } from "../Flex/Flex";
import styles from "./Main.module.css";

export interface MainProps extends React.ComponentProps<"main"> {
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: YakadSpacing;
}

export function Main({
    align = "stretch",
    justify = "start",
    gap = "none",
    className,
    style,
    ...restProps
}: MainProps) {
    return (
        <main
            {...restProps}
            className={classNames(styles.main, className)}
            data-align={align}
            data-justify={justify}
            style={{
                ...style,
                gap: spacingTokens[gap],
            }}
        />
    );
}