import { DealerComment } from "./dealerComment";

export interface DealerCommentList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dealerComment: DealerComment[];
    dealerCommentSpecified: boolean;
}