import { WireIdCodeField9OtherIdentification_2 } from "./wireIdCodeField9OtherIdentification_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIdCode_2 {
    field9OtherIdentification: WireIdCodeField9OtherIdentification_2[];
    field9OtherIdentificationSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
