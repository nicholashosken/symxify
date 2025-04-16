import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Param360ViewSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}