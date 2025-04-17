import { PmtAppMethod } from "./pmtAppMethod";
import { VersionType } from "./versionType";

export interface PmtAppMethodSearchPagedSelectFieldsResponse {
    pmtAppMethod: PmtAppMethod[];
    token: string;
    version1: VersionType;
    messageId: string;
}