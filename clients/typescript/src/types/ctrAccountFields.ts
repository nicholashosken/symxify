import { VersionType } from "./versionType";

export interface CtrAccountFields {
    accountNumber: boolean | null;
    lastFmDate: boolean | null;
    locator: boolean | null;
    recordChangeDate: boolean | null;
    slId: boolean | null;
    slIdType: boolean | null;
    source: boolean | null;
    version1: VersionType;
}