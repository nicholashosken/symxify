import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SycClient {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}