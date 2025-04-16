import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApMisc_2 {
    approverUserIds: BitMap;
    expenseProcessorUserIds: BitMap;
    fwdUserIds: BitMap;
    paymentProcessorUserIds: BitMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}