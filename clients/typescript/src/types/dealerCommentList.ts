import { DealerComment } from "./dealerComment";

export interface DealerCommentList {
    hasReachedMaximumListSize: boolean | null;
    dealerComment: DealerComment[];
}