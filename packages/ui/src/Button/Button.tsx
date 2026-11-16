import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import "./Button.css";

const buttonVariants = cva("yakad-button", {
    variants: {
        variant: {
            filled: "yakad-button--filled",
            tonal: "yakad-button--tonal",
            outlined: "yakad-button--outlined",
            elevated: "yakad-button--elevated",
            text: "yakad-button--text",
        },
    },
    defaultVariants: {
        variant: "filled",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            asChild = false,
            disabled = false,
            type = "button",
            onClick,
            tabIndex,
            ...restProps
        },
        ref
    ) => {
        const classNames = buttonVariants({ variant, className });

        if (asChild) {
            const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
                event
            ) => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }

                onClick?.(event);
            };

            return (
                <Slot
                    ref={ref}
                    data-slot="button"
                    data-variant={variant ?? "filled"}
                    className={classNames}
                    aria-disabled={disabled || undefined}
                    tabIndex={disabled ? -1 : tabIndex}
                    onClick={handleClick}
                    {...restProps}
                />
            );
        }

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                data-slot="button"
                data-variant={variant ?? "filled"}
                className={classNames}
                onClick={onClick}
                {...restProps}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };      