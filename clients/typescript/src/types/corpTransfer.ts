import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CorpTransfer {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}