import { CpWorkCardTracking } from "./cpWorkCardTracking";

export interface CpWorkCardTrackingList {
    hasReachedMaximumListSize: boolean | null;
    cpWorkCardTracking: CpWorkCardTracking[];
}