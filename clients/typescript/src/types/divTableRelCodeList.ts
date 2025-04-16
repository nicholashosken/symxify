import { BitMap } from "./bitMap";

export interface DivTableRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}