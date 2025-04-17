import { VersionType } from "./versionType";

export interface SecurityFields {
    attemptRecordCode: boolean | null;
    description: boolean | null;
    eventLogCode: boolean | null;
    level: boolean | null;
    recordSelection: boolean | null;
    securityCategory: boolean | null;
    version1: VersionType;
}