import { DispenserAdjustType } from "./dispenserAdjustType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CashValueAdjustType {
    dispenserAdjust: DispenserAdjustType[];
    dispenserAdjustSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
