import { VersionType } from "./versionType";

export interface CtrPersonCtrTranInfo {
    accountNumber: string;
    amount: number | null;
    lastFmDate: string | null;
    locator: number | null;
    recordChangeDate: string | null;
    slId: string;
    slIdType: number | null;
    source: number | null;
    version1: VersionType;
}