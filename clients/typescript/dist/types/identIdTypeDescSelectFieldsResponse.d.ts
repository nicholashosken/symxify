import { IdentIdTypeDesc } from "./identIdTypeDesc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IdentIdTypeDescSelectFieldsResponse {
    identIdTypeDesc: IdentIdTypeDesc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
