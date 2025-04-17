import { TrackingCode } from "./trackingCode";

export interface TrackingCodeList {
    hasReachedMaximumListSize: boolean | null;
    trackingCode: TrackingCode[];
}