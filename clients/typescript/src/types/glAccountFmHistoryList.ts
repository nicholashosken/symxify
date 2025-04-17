import { GlAccountFmHistory } from "./glAccountFmHistory";

export interface GlAccountFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    glAccountFmHistory: GlAccountFmHistory[];
}