
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./AppBar.module.css";

const appBarVariants = cva(styles.root, {
    variants: {
        variant: {
            small: styles.small,
            centerAligned: styles.centerAligned,
            medium: styles.medium,
            large: styles.large,
        },
        scrolled: {
            true: styles.scrolled,
            false: null,
        },
    },
    defaultVariants: {
        variant: "small",
        scrolled: false,
    },
});

export type AppBarProps = Omit<
    ComponentPropsWithoutRef<"header">,
    "children"
> &
    VariantProps<typeof appBarVariants> & {
        headline: ReactNode;
        leading?: ReactNode;
        actions?: ReactNode;
    };

const AppBar = forwardRef<HTMLElement, AppBarProps>(
    (
        {
            variant = "small",
            scrolled = false,
            headline,
            leading,
            actions,
            className,
            ...headerProps
        },
        ref
    ) => {
        const currentVariant = variant ?? "small";
        const isExpanded =
            currentVariant === "medium" || currentVariant === "large";

        return (
            <header
                ref={ref}
                className={[
                    appBarVariants({
                        variant: currentVariant,
                        scrolled,
                    }),
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
                {...headerProps}
            >
                <div className={styles.topRow}>
                    <div className={styles.leading}>{leading}</div>

                    {!isExpanded && (
                        <div className={styles.headline}>
                            {headline}
                        </div>
                    )}

                    <div className={styles.actions}>{actions}</div>
                </div>

                {isExpanded && (
                    <div className={styles.headline}>
                        {headline}
                    </div>
                )}
            </header>
        );
    }
);

AppBar.displayName = "AppBar";

export { AppBar, appBarVariants };
