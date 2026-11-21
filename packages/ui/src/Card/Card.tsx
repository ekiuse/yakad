
import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Card.module.css";

const cardVariants = cva(styles.root, {
    variants: {
        variant: {
            elevated: styles.elevated,
            filled: styles.filled,
            outlined: styles.outlined,
        },
        interactive: {
            true: styles.interactive,
            false: null,
        },
        dragged: {
            true: styles.dragged,
            false: null,
        },
        disabled: {
            true: styles.disabled,
            false: null,
        },
    },
    defaultVariants: {
        variant: "elevated",
        interactive: false,
        dragged: false,
        disabled: false,
    },
});

export type CardProps = Omit<
    ComponentPropsWithoutRef<"div">,
    "children"
> &
    VariantProps<typeof cardVariants> & {
        children?: ReactNode;
    };

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = "elevated",
            interactive = false,
            dragged = false,
            disabled = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div
                {...props}
                ref={ref}
                className={cardVariants({
                    variant,
                    interactive,
                    dragged,
                    disabled,
                    className,
                })}
                data-disabled={disabled ? "" : undefined}
                aria-disabled={disabled || undefined}
            >
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        );
    }
);

Card.displayName = "Card";

export type CardIconProps = ComponentPropsWithoutRef<"span">;

const CardIcon = forwardRef<HTMLSpanElement, CardIconProps>(
    ({ className, ...props }, ref) => {
        return (
            <span
                {...props}
                ref={ref}
                className={[styles.icon, className]
                    .filter(Boolean)
                    .join(" ")}
            />
        );
    }
);

CardIcon.displayName = "CardIcon";

export { Card, CardIcon, cardVariants };
