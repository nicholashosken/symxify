import { Cdm } from "./cdm";
import { VersionType } from "./versionType";

export interface CdmSelectFieldsResponse {
    cdm: Cdm;
    version1: VersionType;
    messageId: string;
}