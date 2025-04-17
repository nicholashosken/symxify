import { BatchAchOrig } from "./batchAchOrig";
export interface BatchAchOrigList {
    hasReachedMaximumListSize: boolean | null;
    batchAchOrig: BatchAchOrig[];
}
