import { WireServiceMessageText_2 } from "./wireServiceMessageText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessage_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireServiceMessageText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
