import { VersionType } from "./versionType";

export interface Security {
    attemptRecordCode: number | null;
    description: string;
    eventLogCode: number | null;
    level: number | null;
    recordSelection: number | null;
    securityCategory: number | null;
    version1: VersionType;
}