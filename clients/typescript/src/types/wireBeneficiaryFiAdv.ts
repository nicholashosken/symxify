import { WireBeneficiaryFiAdvText } from "./wireBeneficiaryFiAdvText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiAdv {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireBeneficiaryFiAdvText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}