import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcsGlobalFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}