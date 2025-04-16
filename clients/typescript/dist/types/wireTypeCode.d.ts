import { WireTypeCodeField1690 } from "./wireTypeCodeField1690";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireTypeCode {
    field1690: WireTypeCodeField1690[];
    field1690Specified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
