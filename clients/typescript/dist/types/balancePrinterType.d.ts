import { VersionType } from "./versionType";
export interface BalancePrinterType {
    printerId: number | null;
    tranGlCode: number | null;
    checkAcctNumber: string;
    beginCount: number | null;
    dispenseCount: number | null;
    dispenseAmount: number | null;
    reverseCount: number | null;
    reverseAmount: number | null;
    adjustCount: number | null;
    replenishCount: number | null;
    currentCount: number | null;
    revTotalCount: number | null;
    warnCount: number | null;
    version1: VersionType;
}
