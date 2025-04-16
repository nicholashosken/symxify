import { BitMap } from "./bitMap";

export interface TellerTranFeeRelCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodeList: BitMap;
}