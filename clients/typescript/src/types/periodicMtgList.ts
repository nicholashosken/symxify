import { PeriodicMtg } from "./periodicMtg";

export interface PeriodicMtgList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    periodicMtg: PeriodicMtg[];
    periodicMtgSpecified: boolean;
}