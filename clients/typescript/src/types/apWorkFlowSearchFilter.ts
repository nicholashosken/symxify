import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApWorkFlowSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}