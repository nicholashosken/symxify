import { PrinterAdjustType } from "./printerAdjustType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecondPartyCheckAdjustType {
    printerAdjust: PrinterAdjustType[];
    printerAdjustSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}