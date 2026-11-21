
import {
    forwardRef,
    useId,
    type ComponentPropsWithoutRef,
    type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./TextField.module.css";

const textFieldVariants = cva(styles.root, {
    variants: {
        variant: {
            filled: styles.filled,
            outlined: styles.outlined,
        },
    },
    defaultVariants: {
        variant: "filled",
    },
});

export type TextFieldVariant = "filled" | "outlined";

export type TextFieldProps = Omit<
    ComponentPropsWithoutRef<"input">,
    "size" | "placeholder"
> &
    Omit<VariantProps<typeof textFieldVariants>, "variant"> & {
        variant?: TextFieldVariant;
        label: string;
        supportingText?: ReactNode;
        error?: boolean;
        leadingIcon?: ReactNode;
        trailingIcon?: ReactNode;
        prefix?: ReactNode;
        suffix?: ReactNode;
        className?: string;
    };

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            variant = "filled",
            label,
            supportingText,
            error = false,
            leadingIcon,
            trailingIcon,
            prefix,
            suffix,
            disabled = false,
            required = false,
            id,
            className,
            "aria-describedby": ariaDescribedBy,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const supportingTextId = `${inputId}-supporting-text`;

        const describedBy = [
            ariaDescribedBy,
            supportingText ? supportingTextId : undefined,
        ]
            .filter(Boolean)
            .join(" ") || undefined;

        return (
            <div
                className={textFieldVariants({
                    variant,
                    className,
                })}
                data-error={error ? "true" : undefined}
                data-disabled={disabled ? "true" : undefined}
            >
                <div className={styles.control}>
                    {leadingIcon && (
                        <span
                            className={styles.leadingIcon}
                            aria-hidden="true"
                        >
                            {leadingIcon}
                        </span>
                    )}

                    {prefix && (
                        <span className={styles.prefix}>
                            {prefix}
                        </span>
                    )}

                    <div className={styles.inputContainer}>
                        <input
                            {...props}
                            ref={ref}
                            id={inputId}
                            disabled={disabled}
                            required={required}
                            placeholder=" "
                            aria-invalid={error || undefined}
                            aria-describedby={describedBy}
                            className={styles.input}
                        />

                        <label
                            htmlFor={inputId}
                            className={styles.label}
                        >
                            {label}
                            {required && (
                                <span className={styles.required}>
                                    {" "}*
                                </span>
                            )}
                        </label>
                    </div>

                    {suffix && (
                        <span className={styles.suffix}>
                            {suffix}
                        </span>
                    )}

                    {trailingIcon && (
                        <span
                            className={styles.trailingIcon}
                            aria-hidden="true"
                        >
                            {trailingIcon}
                        </span>
                    )}
                </div>

                {supportingText && (
                    <div
                        id={supportingTextId}
                        className={styles.supporting}
                        aria-live={error ? "polite" : undefined}
                    >
                        {supportingText}
                    </div>
                )}
            </div>
        );
    }
);

TextField.displayName = "TextField";

export {
    TextField,
    textFieldVariants,
};
