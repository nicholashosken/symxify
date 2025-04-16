import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PeriodicMtgFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}