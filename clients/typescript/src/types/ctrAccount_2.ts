import { VersionType } from "./versionType";

export interface CtrAccount_2 {
    accountNumber: string;
    lastFmDate: string | null;
    locator: number | null;
    recordChangeDate: string | null;
    slId: string;
    slIdType: number | null;
    source: number | null;
    version1: VersionType;
}