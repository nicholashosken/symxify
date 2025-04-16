import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckNumberRange {
    beginningCheckNumber: string;
    endingCheckNumber: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
