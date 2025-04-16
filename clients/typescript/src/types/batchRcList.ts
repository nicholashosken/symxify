import { BatchRc } from "./batchRc";

export interface BatchRcList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    batchRc: BatchRc[];
    batchRcSpecified: boolean;
}