import { LateChg } from "./lateChg";
export interface LateChgList {
    hasReachedMaximumListSize: boolean | null;
    lateChg: LateChg[];
}
