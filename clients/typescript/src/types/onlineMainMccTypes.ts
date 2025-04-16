import { BitMap } from "./bitMap";

export interface OnlineMainMccTypes {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    mccTypes: BitMap;
}