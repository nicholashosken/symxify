import { VersionType } from "./versionType";

export interface GlCodes {
    clearingCode: number | null;
    checkDisbursedCode: number | null;
    externalCode: number | null;
    version1: VersionType;
}