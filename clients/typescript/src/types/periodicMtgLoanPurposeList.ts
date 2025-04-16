import { BitMap } from "./bitMap";

export interface PeriodicMtgLoanPurposeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    loanPurposeList: BitMap;
}