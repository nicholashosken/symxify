import { BitMap } from "./bitMap";
export interface WdFeeRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}
