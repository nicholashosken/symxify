import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParameterFields {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}