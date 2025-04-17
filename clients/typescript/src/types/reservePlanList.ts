import { ReservePlan } from "./reservePlan";

export interface ReservePlanList {
    hasReachedMaximumListSize: boolean | null;
    reservePlan: ReservePlan[];
}