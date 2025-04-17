import { CashAmount } from "./cashAmount";
import { VersionType } from "./versionType";

export interface AmountInfo {
    totalAmount: number | null;
    checkAmount: number | null;
    cashAmount: CashAmount;
    version1: VersionType;
}