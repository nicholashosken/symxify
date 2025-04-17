import { WireBeneficiaryAdvText_2 } from "./wireBeneficiaryAdvText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryAdv_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireBeneficiaryAdvText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
