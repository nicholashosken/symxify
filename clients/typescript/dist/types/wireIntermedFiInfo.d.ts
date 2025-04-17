import { WireIntermedFiInfoText } from "./wireIntermedFiInfoText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIntermedFiInfo {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireIntermedFiInfoText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
