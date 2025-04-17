import { VersionType } from "./versionType";
export interface LookupByShortNameResponse {
    accountNumber: string[];
    version1: VersionType;
    messageId: string;
}
