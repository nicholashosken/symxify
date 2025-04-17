import { GlHistory } from "./glHistory";

export interface GlHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glHistory: GlHistory[];
    glHistorySpecified: boolean;
}