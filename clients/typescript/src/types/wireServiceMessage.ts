import { WireServiceMessageText } from "./wireServiceMessageText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireServiceMessage {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireServiceMessageText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}