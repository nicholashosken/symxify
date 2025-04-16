import { MiscPmt } from "./miscPmt";

export interface MiscPmtList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    miscPmt: MiscPmt[];
    miscPmtSpecified: boolean;
}