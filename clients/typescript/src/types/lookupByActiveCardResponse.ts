import { VersionType } from "./versionType";

export interface LookupByActiveCardResponse {
    accountNumber: string;
    version1: VersionType;
    messageId: string;
}