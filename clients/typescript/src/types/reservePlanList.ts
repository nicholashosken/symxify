import { ReservePlan } from "./reservePlan";

export interface ReservePlanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    reservePlan: ReservePlan[];
    reservePlanSpecified: boolean;
}