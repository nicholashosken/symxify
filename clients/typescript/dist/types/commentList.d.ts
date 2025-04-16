import { Comment } from "./comment";
export interface CommentList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    comment: Comment[];
    commentSpecified: boolean;
}
