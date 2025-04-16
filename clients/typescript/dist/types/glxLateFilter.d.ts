import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlxLateFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
