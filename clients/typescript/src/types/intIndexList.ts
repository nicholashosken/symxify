import { IntIndex } from "./intIndex";

export interface IntIndexList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    intIndex: IntIndex[];
    intIndexSpecified: boolean;
}