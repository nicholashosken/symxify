import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardAccessFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
