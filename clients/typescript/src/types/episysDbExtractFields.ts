import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EpisysDbExtractFields {
    extractDate: number[];
    extractDateSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}