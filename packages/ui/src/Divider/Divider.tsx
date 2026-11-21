
import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ElementRef,
} from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Divider.module.css";

const dividerVariants = cva(styles.root, {
    variants: {
        orientation: {
            horizontal: styles.horizontal,
            vertical: styles.vertical,
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});

type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = Omit<
    ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    "orientation" | "asChild"
> &
    Omit<VariantProps<typeof dividerVariants>, "orientation"> & {
        orientation?: DividerOrientation;
    };

const Divider = forwardRef<
    ElementRef<typeof SeparatorPrimitive.Root>,
    DividerProps
>(
    (
        {
            orientation = "horizontal",
            decorative = false,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <SeparatorPrimitive.Root
                {...props}
                ref={ref}
                orientation={orientation}
                decorative={decorative}
                className={dividerVariants({
                    orientation,
                    className,
                })}
            />
        );
    }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };
