import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";
export interface DealerCommentSelectFieldsResponse {
    dealerComment: DealerComment;
    version1: VersionType;
    messageId: string;
}
