import { ReservePlanTracking } from "./reservePlanTracking";

export interface ReservePlanTrackingList {
    hasReachedMaximumListSize: boolean | null;
    reservePlanTracking: ReservePlanTracking[];
}