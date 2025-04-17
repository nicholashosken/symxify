import { WireOfacDetailsText } from "./wireOfacDetailsText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOfacDetails {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireOfacDetailsText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
