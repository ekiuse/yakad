import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./AppBar.module.css";

const appBarVariants = cva(styles.root, {
    variants: {
        variant: {
            small: styles.small,
            "center-aligned": styles.centerAligned,
            medium: styles.medium,
            large: styles.large,
        },
        scrolledUnder: {
            true: styles.scrolledUnder,
            false: "",
        },
        collapsed: {
            true: styles.collapsed,
            false: "",
        },
        scrollHidden: {
            true: styles.hidden,
            false: "",
        },
    },
    defaultVariants: {
        variant: "small",
        scrolledUnder: false,
        collapsed: false,
        scrollHidden: false,
    },
});

export type AppBarScrollBehavior =
    | "pinned"
    | "enterAlways"
    | "exitUntilCollapsed";

export interface AppBarProps
    extends Omit<React.ComponentProps<"header">, "title">,
    VariantProps<typeof appBarVariants> {
    title?: React.ReactNode;
    navigationIcon?: React.ReactNode;
    actions?: React.ReactNode;
    scrollBehavior?: AppBarScrollBehavior;
}

interface ScrollState {
    scrolledUnder: boolean;
    collapsed: boolean;
    hidden: boolean;
}

const initialScrollState: ScrollState = {
    scrolledUnder: false,
    collapsed: false,
    hidden: false,
};

export function AppBar({
    variant = "small",
    scrollBehavior = "pinned",
    navigationIcon,
    title,
    actions,
    children,
    className,
    ...restProps
}: AppBarProps) {
    const [scrollState, setScrollState] =
        React.useState<ScrollState>(initialScrollState);

    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const collapseDistance =
            variant === "medium" ? 48 : variant === "large" ? 88 : 0;

        const getCollapsedState = (scrollY: number) =>
            scrollBehavior === "exitUntilCollapsed" &&
            collapseDistance > 0 &&
            scrollY >= collapseDistance;

        if (scrollBehavior === "pinned") {
            const handleScroll = () => {
                const scrolledUnder = window.scrollY > 0;

                setScrollState((previous) => {
                    if (
                        previous.scrolledUnder === scrolledUnder &&
                        !previous.collapsed &&
                        !previous.hidden
                    ) {
                        return previous;
                    }

                    return {
                        scrolledUnder,
                        collapsed: false,
                        hidden: false,
                    };
                });
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll, {
                passive: true,
            });

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }

        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            const previousScrollY = lastScrollY.current;
            const scrollDelta = currentScrollY - previousScrollY;

            const scrolledUnder = currentScrollY > 0;
            const collapsed = getCollapsedState(currentScrollY);

            setScrollState((previous) => {
                let hidden = false;

                if (scrollBehavior === "enterAlways") {
                    if (currentScrollY <= 64) {
                        hidden = false;
                    } else if (scrollDelta > 0) {
                        hidden = true;
                    } else if (scrollDelta < 0) {
                        hidden = false;
                    } else {
                        hidden = previous.hidden;
                    }
                }

                if (
                    previous.scrolledUnder === scrolledUnder &&
                    previous.collapsed === collapsed &&
                    previous.hidden === hidden
                ) {
                    return previous;
                }

                return {
                    scrolledUnder,
                    collapsed,
                    hidden,
                };
            });

            lastScrollY.current = currentScrollY;
        };

        lastScrollY.current = Math.max(0, window.scrollY);

        setScrollState({
            scrolledUnder: lastScrollY.current > 0,
            collapsed: getCollapsedState(lastScrollY.current),
            hidden: false,
        });

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [variant, scrollBehavior]);

    const rootClassName = appBarVariants({
        variant,
        scrolledUnder: scrollState.scrolledUnder,
        collapsed: scrollState.collapsed,
        scrollHidden: scrollState.hidden,
        className,
    });

    return (
        <header
            {...restProps}
            className={rootClassName}
            data-slot="app-bar"
            data-variant={variant}
            data-scroll-behavior={scrollBehavior}
            data-scrolled-under={scrollState.scrolledUnder}
            data-collapsed={scrollState.collapsed}
            data-hidden={scrollState.hidden}
            data-has-navigation={Boolean(navigationIcon)}
            data-has-title={Boolean(title)}
        >
            <div className={styles.container}>
                {navigationIcon && (
                    <div className={styles.navigation}>
                        {navigationIcon}
                    </div>
                )}

                {title && (
                    <div className={styles.title}>
                        {title}
                    </div>
                )}

                {(actions || children) && (
                    <div className={styles.actions}>
                        {actions}
                        {children}
                    </div>
                )}
            </div>
        </header>
    );
}

export { appBarVariants };