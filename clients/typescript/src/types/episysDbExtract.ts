import { EpisysDbExtractExtractDate } from "./episysDbExtractExtractDate";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EpisysDbExtract {
    extractDate: EpisysDbExtractExtractDate[];
    extractDateSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}