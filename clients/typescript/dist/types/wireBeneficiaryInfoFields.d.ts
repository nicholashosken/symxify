import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryInfoFields {
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    text: number[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
