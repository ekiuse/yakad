
import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./NavigationBar.module.css";

const navigationBarVariants = cva(styles.root, {
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

type NavigationBarOrientation = "horizontal" | "vertical";

export type NavigationBarProps = Omit<
    ComponentPropsWithoutRef<"nav">,
    "children"
> &
    Omit<VariantProps<typeof navigationBarVariants>, "orientation"> & {
        orientation?: NavigationBarOrientation;
        children: ReactNode;
    };

const NavigationBar = forwardRef<HTMLElement, NavigationBarProps>(
    (
        {
            orientation = "horizontal",
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <nav
                {...props}
                ref={ref}
                data-orientation={orientation}
                className={navigationBarVariants({
                    orientation,
                    className,
                })}
            >
                {children}
            </nav>
        );
    }
);

NavigationBar.displayName = "NavigationBar";

export type NavigationBarListProps =
    ComponentPropsWithoutRef<"ul">;

const NavigationBarList = forwardRef<
    HTMLUListElement,
    NavigationBarListProps
>(({ className, children, ...props }, ref) => {
    return (
        <ul
            {...props}
            ref={ref}
            className={[
                styles.list,
                className,
            ].filter(Boolean).join(" ")}
        >
            {children}
        </ul>
    );
});

NavigationBarList.displayName = "NavigationBarList";

export interface NavigationBarItemProps
    extends Omit<ComponentPropsWithoutRef<"a">, "children"> {
    icon: ReactNode;
    label: ReactNode;
    active?: boolean;
}

const NavigationBarItem = forwardRef<
    HTMLAnchorElement,
    NavigationBarItemProps
>(
    (
        {
            icon,
            label,
            active = false,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <li className={styles.listItem}>
                <a
                    {...props}
                    ref={ref}
                    aria-current={active ? "page" : undefined}
                    data-active={active ? "true" : "false"}
                    className={[
                        styles.item,
                        className,
                    ].filter(Boolean).join(" ")}
                >
                    <span
                        className={styles.activeIndicator}
                        aria-hidden="true"
                    />

                    <span
                        className={styles.stateLayer}
                        aria-hidden="true"
                    />

                    <span className={styles.icon}>
                        {icon}
                    </span>

                    <span className={styles.label}>
                        {label}
                    </span>
                </a>
            </li>
        );
    }
);

NavigationBarItem.displayName = "NavigationBarItem";

export {
    NavigationBar,
    NavigationBarList,
    NavigationBarItem,
    navigationBarVariants,
};

export type {
    NavigationBarOrientation,
};
