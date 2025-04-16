import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SynapsysMrmFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
