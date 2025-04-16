import { BitMap } from "./bitMap";

export interface TellerFeeRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}