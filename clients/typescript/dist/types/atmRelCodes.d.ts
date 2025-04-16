import { BitMap } from "./bitMap";
export interface AtmRelCodes {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    relCodes: BitMap;
}
