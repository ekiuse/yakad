import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./form.module.css";

export default function Form(props: React.HTMLAttributes<HTMLFormElement>) {
    const joinedClassNames = joinClassNames(styles.form, props.className!);

    return (
        <form {...props} className={joinedClassNames}>
            {props.children as any}
        </form>
    );
}
