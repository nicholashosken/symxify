import { WireIntermedFiAdvText } from "./wireIntermedFiAdvText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireIntermedFiAdv {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireIntermedFiAdvText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}