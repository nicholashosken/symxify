import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbiSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}