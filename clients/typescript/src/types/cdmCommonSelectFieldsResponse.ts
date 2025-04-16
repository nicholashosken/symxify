import { CdmCommon } from "./cdmCommon";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CdmCommonSelectFieldsResponse {
    cdmCommon: CdmCommon;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}