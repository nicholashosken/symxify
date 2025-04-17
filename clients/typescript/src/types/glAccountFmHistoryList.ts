import { GlAccountFmHistory } from "./glAccountFmHistory";

export interface GlAccountFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glAccountFmHistory: GlAccountFmHistory[];
    glAccountFmHistorySpecified: boolean;
}