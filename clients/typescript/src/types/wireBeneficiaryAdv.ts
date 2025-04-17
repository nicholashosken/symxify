import { WireBeneficiaryAdvText } from "./wireBeneficiaryAdvText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryAdv {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireBeneficiaryAdvText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}