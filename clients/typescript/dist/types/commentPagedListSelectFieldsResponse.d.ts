import { Comment } from "./comment";
import { VersionType } from "./versionType";
export interface CommentPagedListSelectFieldsResponse {
    comment: Comment[];
    token: string;
    version1: VersionType;
    messageId: string;
}
