import { IdentIdTypeDescIdType } from "./identIdTypeDescIdType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IdentIdTypeDesc {
    idType: IdentIdTypeDescIdType[];
    idTypeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}