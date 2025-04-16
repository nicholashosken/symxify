import { EpisysDbExtractExtractDate_2 } from "./episysDbExtractExtractDate_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EpisysDbExtract_2 {
    extractDate: EpisysDbExtractExtractDate_2[];
    extractDateSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
