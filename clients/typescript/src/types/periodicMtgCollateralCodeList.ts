import { BitMap } from "./bitMap";

export interface PeriodicMtgCollateralCodeList {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    collateralCodeList: BitMap;
}