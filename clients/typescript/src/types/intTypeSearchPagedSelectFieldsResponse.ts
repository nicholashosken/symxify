import { IntType } from "./intType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IntTypeSearchPagedSelectFieldsResponse {
    intType: IntType[];
    intTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}