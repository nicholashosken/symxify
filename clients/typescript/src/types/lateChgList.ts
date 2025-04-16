import { LateChg } from "./lateChg";

export interface LateChgList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    lateChg: LateChg[];
    lateChgSpecified: boolean;
}