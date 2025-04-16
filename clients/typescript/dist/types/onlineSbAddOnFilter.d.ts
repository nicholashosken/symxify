import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSbAddOnFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
