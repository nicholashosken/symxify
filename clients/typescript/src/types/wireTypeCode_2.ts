import { WireTypeCodeField1690_2 } from "./wireTypeCodeField1690_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireTypeCode_2 {
    field1690: WireTypeCodeField1690_2[];
    field1690Specified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}