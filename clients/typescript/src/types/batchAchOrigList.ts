import { BatchAchOrig } from "./batchAchOrig";

export interface BatchAchOrigList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    batchAchOrig: BatchAchOrig[];
    batchAchOrigSpecified: boolean;
}