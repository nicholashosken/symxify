import { WireFiToFiInfoText_2 } from "./wireFiToFiInfoText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireFiToFiInfo_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireFiToFiInfoText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}