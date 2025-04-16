import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WestUnCommCode {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}