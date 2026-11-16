import { argbFromHex, Hct } from "@material/material-color-utilities";
import { sourceColor } from "./source";

export const sourceHct = Hct.fromInt(argbFromHex(sourceColor));