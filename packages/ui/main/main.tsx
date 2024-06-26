import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./main.module.css";

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    navOpen?: boolean;
}

export default function Main(props: MainProps) {
    const navOpenClass = props.navOpen ? styles.navOpen : "";

    const joinedClassNames = joinClassNames(
        styles.main,
        navOpenClass,
        props.className!
    );

    return (
        <main {...props} className={joinedClassNames}>
            {props.children as any}
        </main>
    );
}
