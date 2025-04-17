import { WireFiToFiInfoText } from "./wireFiToFiInfoText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireFiToFiInfo {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireFiToFiInfoText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
