import { WireDrawdownDebitAcctAdvText_2 } from "./wireDrawdownDebitAcctAdvText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireDrawdownDebitAcctAdv_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireDrawdownDebitAcctAdvText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}