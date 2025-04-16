import { IntType } from "./intType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IntTypeSelectFieldsResponse {
    intType: IntType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
