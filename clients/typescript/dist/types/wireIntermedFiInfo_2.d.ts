import { WireIntermedFiInfoText_2 } from "./wireIntermedFiInfoText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIntermedFiInfo_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireIntermedFiInfoText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
