import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AudioFields {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}