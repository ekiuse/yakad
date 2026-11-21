
import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ElementRef,
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Checkbox.module.css";

const checkboxVariants = cva(styles.root, {
    variants: {
        error: {
            true: styles.error,
            false: null,
        },
        disabled: {
            true: styles.disabled,
            false: null,
        },
    },
    defaultVariants: {
        error: false,
        disabled: false,
    },
});

export type CheckboxProps = Omit<
    ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "asChild"
> &
    VariantProps<typeof checkboxVariants> & {
        error?: boolean;
    };

const Checkbox = forwardRef<
    ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(
    (
        {
            error = false,
            disabled = false,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <CheckboxPrimitive.Root
                {...props}
                ref={ref}
                disabled={disabled}
                aria-invalid={error || undefined}
                data-invalid={error ? "" : undefined}
                className={checkboxVariants({
                    error,
                    disabled,
                    className,
                })}
            >
                <CheckboxPrimitive.Indicator
                    className={styles.indicator}
                >
                    <svg
                        className={styles.icon}
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            className={styles.checkIcon}
                            d="M3.5 9.5L7 13L14.5 5.5"
                        />
                        <path
                            className={styles.indeterminateIcon}
                            d="M4.5 9H13.5"
                        />
                    </svg>
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
        );
    }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
