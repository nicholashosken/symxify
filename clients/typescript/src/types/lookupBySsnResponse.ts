import { VersionType } from "./versionType";

export interface LookupBySsnResponse {
    accountNumber: string[];
    version1: VersionType;
    messageId: string;
}