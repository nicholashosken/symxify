import { WireReceiverFiInfoText_2 } from "./wireReceiverFiInfoText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireReceiverFiInfo_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireReceiverFiInfoText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}