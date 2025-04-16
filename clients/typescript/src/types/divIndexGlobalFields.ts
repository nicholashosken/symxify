import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivIndexGlobalFields {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}