import { CpWorkCardTracking } from "./cpWorkCardTracking";

export interface CpWorkCardTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cpWorkCardTracking: CpWorkCardTracking[];
    cpWorkCardTrackingSpecified: boolean;
}