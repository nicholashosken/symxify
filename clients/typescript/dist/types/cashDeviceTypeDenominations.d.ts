import { DenominationType } from "./denominationType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CashDeviceTypeDenominations {
    denomination: DenominationType[];
    denominationSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
