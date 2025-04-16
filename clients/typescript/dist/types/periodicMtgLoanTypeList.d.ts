import { BitMap } from "./bitMap";
export interface PeriodicMtgLoanTypeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    loanTypeList: BitMap;
}
