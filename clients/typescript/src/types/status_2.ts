import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Status_2 {
    verified: boolean;
    errorMessage: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}