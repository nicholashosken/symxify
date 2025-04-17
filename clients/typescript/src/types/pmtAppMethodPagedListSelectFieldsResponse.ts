import { PmtAppMethod } from "./pmtAppMethod";
import { VersionType } from "./versionType";

export interface PmtAppMethodPagedListSelectFieldsResponse {
    pmtAppMethod: PmtAppMethod[];
    token: string;
    version1: VersionType;
    messageId: string;
}