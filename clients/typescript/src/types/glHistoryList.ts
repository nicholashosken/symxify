import { GlHistory } from "./glHistory";

export interface GlHistoryList {
    hasReachedMaximumListSize: boolean | null;
    glHistory: GlHistory[];
}