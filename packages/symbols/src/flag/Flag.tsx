import React from "react";
import * as Flags from "./flags";
import type { FlagCode } from "./types";
import { IconSizeKey, resolveIconSize } from "../sizes";

interface FlagProps extends React.SVGProps<SVGSVGElement> {
  code?: FlagCode;
  size?: number | IconSizeKey;
}

export const Flag = ({ code, size, style, ...props }: FlagProps) => {
  const componentName = code
    ? `${code.toUpperCase().split("-").join("")}Flag`
    : "UNFlag";

  const SelectedFlag = (Flags as any)[componentName];

  if (!SelectedFlag) {
    console.warn(
      `Flag with code "${code}" (looking for ${componentName}) not found.`
    );
    return null;
  }

  const sizeProps = size
    ? {
      width: resolveIconSize(size),
      height: resolveIconSize(size),
    }
    : {};

  return <SelectedFlag {...sizeProps} style={style} {...props} />;
};