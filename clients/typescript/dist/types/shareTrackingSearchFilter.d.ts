import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareTrackingSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
