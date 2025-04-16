import { BitMap } from "./bitMap";
export interface OnlineMainRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}
