import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSbAddOnSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
