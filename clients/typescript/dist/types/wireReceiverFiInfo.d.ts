import { WireReceiverFiInfoText } from "./wireReceiverFiInfoText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireReceiverFiInfo {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireReceiverFiInfoText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
