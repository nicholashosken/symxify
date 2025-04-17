import { PeriodicMtg } from "./periodicMtg";
export interface PeriodicMtgList {
    hasReachedMaximumListSize: boolean | null;
    periodicMtg: PeriodicMtg[];
}
