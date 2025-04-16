import { TrackingCode } from "./trackingCode";

export interface TrackingCodeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    trackingCode: TrackingCode[];
    trackingCodeSpecified: boolean;
}