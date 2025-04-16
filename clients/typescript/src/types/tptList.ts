import { Tpt } from "./tpt";

export interface TptList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tpt: Tpt[];
    tptSpecified: boolean;
}