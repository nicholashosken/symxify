import { Comment } from "./comment";
import { VersionType } from "./versionType";
export interface CommentSelectFieldsResponse {
    comment: Comment;
    version1: VersionType;
    messageId: string;
}
