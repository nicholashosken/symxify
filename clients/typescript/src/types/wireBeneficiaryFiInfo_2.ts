import { WireBeneficiaryFiInfoText_2 } from "./wireBeneficiaryFiInfoText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiInfo_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireBeneficiaryFiInfoText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}