import { BitMap } from "./bitMap";

export interface MiscPmtTrackingTypes {
    entryIdValue: number;
    entryIdValueSpecified: boolean;
    entryId: number | null;
    trackingTypes: BitMap;
}