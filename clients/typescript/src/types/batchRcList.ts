import { BatchRc } from "./batchRc";

export interface BatchRcList {
    hasReachedMaximumListSize: boolean | null;
    batchRc: BatchRc[];
}