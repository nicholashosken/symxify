import { BitMap } from "./bitMap";
export interface AcctLimitWarningCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    warningCodeList: BitMap;
}
