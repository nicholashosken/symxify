import { VersionType } from "./versionType";
export interface AmountInformation {
    totalAmount: number | null;
    checkAmount: number | null;
    cashAmount: number | null;
    version1: VersionType;
}
