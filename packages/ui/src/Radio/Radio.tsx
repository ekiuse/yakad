
import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ElementRef,
} from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Radio.module.css";

const radioGroupVariants = cva(styles.root, {
    variants: {
        orientation: {
            horizontal: styles.horizontal,
            vertical: styles.vertical,
        },
    },
    defaultVariants: {
        orientation: "vertical",
    },
});

export type RadioGroupOrientation = "horizontal" | "vertical";

export type RadioGroupProps = Omit<
    ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    "orientation" | "className"
> &
    Omit<VariantProps<typeof radioGroupVariants>, "orientation"> & {
        orientation?: RadioGroupOrientation;
        className?: string;
    };

const RadioGroup = forwardRef<
    ElementRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupProps
>(
    (
        {
            orientation = "vertical",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <RadioGroupPrimitive.Root
                {...props}
                ref={ref}
                orientation={orientation}
                className={radioGroupVariants({
                    orientation,
                    className,
                })}
            />
        );
    }
);

RadioGroup.displayName = "RadioGroup";

export type RadioGroupItemProps =
    ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

const RadioGroupItem = forwardRef<
    ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemProps
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        return (
            <RadioGroupPrimitive.Item
                {...props}
                ref={ref}
                className={[
                    styles.item,
                    className,
                ].filter(Boolean).join(" ")}
            >
                <span
                    className={styles.stateLayer}
                    aria-hidden="true"
                />

                <span
                    className={styles.icon}
                    aria-hidden="true"
                >
                    <RadioGroupPrimitive.Indicator
                        className={styles.indicator}
                    />
                </span>
            </RadioGroupPrimitive.Item>
        );
    }
);

RadioGroupItem.displayName = "RadioGroupItem";

export {
    RadioGroup,
    RadioGroupItem,
    radioGroupVariants,
};
