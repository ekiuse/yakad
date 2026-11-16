import * as React from "react";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { spacingTokens, type YakadSpacing } from "../../Types/spacing";
import type { FlexAlign, FlexJustify } from "../Flex/Flex";
import styles from "./Footer.module.css";

export type FooterPosition = "static" | "sticky" | "fixed";

export type FooterScrollBehavior = "none" | "hide-on-scroll";

export interface FooterProps extends React.ComponentProps<"footer"> {
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: YakadSpacing;
    wrap?: boolean;
    position?: FooterPosition;
    scrollBehavior?: FooterScrollBehavior;
    blur?: boolean;
    contentMaxWidth?: React.CSSProperties["maxWidth"];
}

export function Footer({
    align = "center",
    justify = "between",
    gap = "medium",
    wrap = true,
    position = "static",
    scrollBehavior = "none",
    blur = false,
    contentMaxWidth,
    className,
    style,
    children,
    ...restProps
}: FooterProps) {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (scrollBehavior === "none") {
            setHidden(false);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            const previousScrollY = lastScrollY.current;

            if (currentScrollY > previousScrollY && currentScrollY > 64) {
                setHidden(true);
            } else if (
                currentScrollY < previousScrollY ||
                currentScrollY <= 64
            ) {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        lastScrollY.current = Math.max(0, window.scrollY);
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollBehavior]);

    return (
        <footer
            {...restProps}
            className={classNames(styles.footer, className)}
            data-position={position}
            data-blur={blur}
            data-hidden={hidden}
            data-align={align}
            data-justify={justify}
            data-wrap={wrap}
            style={style}
        >
            <div
                className={styles.content}
                style={{
                    maxWidth: contentMaxWidth,
                    gap: spacingTokens[gap],
                }}
            >
                {children}
            </div>
        </footer>
    );
}