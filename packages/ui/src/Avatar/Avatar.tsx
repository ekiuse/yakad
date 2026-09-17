import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.css";
import { Material } from "@yakad/symbols";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    ref?: React.Ref<HTMLDivElement>;
}

export function Avatar({ src, className, ...restProps }: AvatarProps) {
    const joinedClassNames = classNames(styles.profileContainer, className);

    return (
        <div
            {...restProps}
            className={joinedClassNames}
            style={src ? { backgroundImage: `url(${src})` } : {}}
        >
            <div className={styles.editOverlay}>
                <Material icon="edit" />
            </div>
        </div>
    );
}
