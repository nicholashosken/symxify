import { PrinterAdjustType } from "./printerAdjustType";
import { VersionType } from "./versionType";

export interface SecondPartyCheckAdjustType {
    printerAdjust: PrinterAdjustType[];
    version1: VersionType;
}