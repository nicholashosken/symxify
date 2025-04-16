import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TrackingCodeFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}