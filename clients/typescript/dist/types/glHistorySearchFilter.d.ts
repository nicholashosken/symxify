import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlHistorySearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
