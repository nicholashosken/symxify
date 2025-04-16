import { Cdm } from "./cdm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CdmSelectFieldsResponse {
    cdm: Cdm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}