import { MiscPmt } from "./miscPmt";
export interface MiscPmtList {
    hasReachedMaximumListSize: boolean | null;
    miscPmt: MiscPmt[];
}
