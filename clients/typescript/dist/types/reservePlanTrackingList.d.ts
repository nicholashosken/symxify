import { ReservePlanTracking } from "./reservePlanTracking";
export interface ReservePlanTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    reservePlanTracking: ReservePlanTracking[];
    reservePlanTrackingSpecified: boolean;
}
