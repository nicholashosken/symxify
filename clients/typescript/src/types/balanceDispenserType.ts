import { VersionType } from "./versionType";

export interface BalanceDispenserType {
    dispenserId: number | null;
    tranGlCode: number | null;
    sourceGlCode: number | null;
    denomination: number | null;
    beginAmount: number | null;
    dispenseAmount: number | null;
    reverseAmount: number | null;
    adjustAmount: number | null;
    replenishAmount: number | null;
    revTotalAmount: number | null;
    currentAmount: number | null;
    warningAmount: number | null;
    version1: VersionType;
}