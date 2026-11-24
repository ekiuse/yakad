
import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { buttonTokens } from "../Theme/component/Button/tokens";
import styles from "./Button.module.css";

const buttonVariants = cva(styles.root, {
    variants: {
        variant: {
            filled: styles.filled,
            tonal: styles.tonal,
            elevated: styles.elevated,
            outlined: styles.outlined,
            text: styles.text,
        },
        size: {
            extraSmall: styles.extraSmall,
            small: styles.small,
            medium: styles.medium,
            large: styles.large,
            extraLarge: styles.extraLarge,
        },
        shape: {
            round: styles.round,
            square: styles.square,
        },
        disabled: {
            true: styles.disabled,
            false: null,
        },
    },
    defaultVariants: {
        variant: "filled",
        size: "medium",
        shape: buttonTokens.shape.default,
        disabled: false,
    },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type NativeButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "color"
> &
    ButtonVariantProps & {
        asChild?: false;
    };

type SlottedButtonProps = Omit<
    React.ComponentPropsWithoutRef<typeof Slot>,
    "children" | "className"
> &
    ButtonVariantProps & {
        asChild: true;
        children: React.ReactElement;
        className?: string;
        disabled?: boolean;
    };

export type ButtonProps = NativeButtonProps | SlottedButtonProps;

const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
    if (props.asChild) {
        const {
            asChild,
            variant,
            size,
            shape,
            disabled = false,
            className,
            children,
            tabIndex,
            ...slotProps
        } = props;

        void asChild;

        return (
            <Slot
                ref={ref}
                className={[
                    buttonVariants({
                        variant,
                        size,
                        shape,
                        disabled,
                    }),
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : tabIndex}
                {...slotProps}
            >
                {children}
            </Slot>
        );
    }

    const {
        variant,
        size,
        shape,
        disabled = false,
        className,
        type = "button",
        ...buttonProps
    } = props;

    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            type={type}
            disabled={disabled}
            className={[
                buttonVariants({
                    variant,
                    size,
                    shape,
                    disabled,
                }),
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...buttonProps}
        />
    );
});

Button.displayName = "Button";

export { Button, buttonVariants };
