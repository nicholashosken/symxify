import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApMiscSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}