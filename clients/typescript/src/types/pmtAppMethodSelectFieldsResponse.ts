import { PmtAppMethod } from "./pmtAppMethod";
import { VersionType } from "./versionType";

export interface PmtAppMethodSelectFieldsResponse {
    pmtAppMethod: PmtAppMethod;
    version1: VersionType;
    messageId: string;
}