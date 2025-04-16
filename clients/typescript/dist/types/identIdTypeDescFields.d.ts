import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IdentIdTypeDescFields {
    idType: number[];
    idTypeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
