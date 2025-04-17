import { WireDrawdownDebitAcctAdvText } from "./wireDrawdownDebitAcctAdvText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireDrawdownDebitAcctAdv {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireDrawdownDebitAcctAdvText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
