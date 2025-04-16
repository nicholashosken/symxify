import { IdentIdTypeDescIdType_2 } from "./identIdTypeDescIdType_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IdentIdTypeDesc_2 {
    idType: IdentIdTypeDescIdType_2[];
    idTypeSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}