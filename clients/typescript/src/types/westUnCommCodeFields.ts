import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WestUnCommCodeFields {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}