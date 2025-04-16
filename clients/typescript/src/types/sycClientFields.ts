import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SycClientFields {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}