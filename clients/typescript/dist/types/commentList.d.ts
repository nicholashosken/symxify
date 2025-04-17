import { Comment } from "./comment";
export interface CommentList {
    hasReachedMaximumListSize: boolean | null;
    comment: Comment[];
}
