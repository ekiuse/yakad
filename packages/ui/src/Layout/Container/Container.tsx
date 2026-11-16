import * as React from "react";
import styles from "./Container.module.css";

export interface ContainerProps extends React.ComponentProps<"div"> {
    maxWidth?: React.CSSProperties["maxWidth"];
    centered?: boolean;
}

export function Container({
    maxWidth,
    centered = true,
    className,
    style,
    ...restProps
}: ContainerProps) {
    return (
        <div
            {...restProps}
            className={[
                styles.container,
                centered && styles.centered,
                className,
            ].filter(Boolean).join(" ")}
            style={{
                ...style,
                maxWidth: maxWidth ?? style?.maxWidth,
            }}
        />
    );
}