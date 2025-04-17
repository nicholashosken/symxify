import { VersionType } from "./versionType";
export interface LookupByAnyCardResponse {
    accountNumber: string[];
    version1: VersionType;
    messageId: string;
}
