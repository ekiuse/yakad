import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./select.module.css";

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  variant?: "outlined" | "filled";
  placeholder?: string;
}
export default function Select(props: SelectProps) {
  const joinedClassNames = joinClassNames(
    styles.select,
    props.variant ? styles[props.variant] : styles.outlined,
    props.className!
  );
  return (
    <div className={styles.div}>
      <select {...props} className={joinedClassNames}>
        {props.children}
      </select>
      <label className={styles.label}>{props.placeholder}</label>
      <div className={styles.borderdiv}></div>
    </div>
  );
}