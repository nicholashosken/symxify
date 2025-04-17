import { WireOfacDetailsText_2 } from "./wireOfacDetailsText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOfacDetails_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireOfacDetailsText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
