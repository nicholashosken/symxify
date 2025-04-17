import { Cdm } from "./cdm";
import { VersionType } from "./versionType";
export interface CdmPagedListSelectFieldsResponse {
    cdm: Cdm[];
    token: string;
    version1: VersionType;
    messageId: string;
}
