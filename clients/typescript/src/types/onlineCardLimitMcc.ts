import { BitMap } from "./bitMap";

export interface OnlineCardLimitMcc {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    limitMcc: BitMap;
}