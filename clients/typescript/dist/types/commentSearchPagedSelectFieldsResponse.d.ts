import { Comment } from "./comment";
import { VersionType } from "./versionType";
export interface CommentSearchPagedSelectFieldsResponse {
    comment: Comment[];
    token: string;
    version1: VersionType;
    messageId: string;
}
