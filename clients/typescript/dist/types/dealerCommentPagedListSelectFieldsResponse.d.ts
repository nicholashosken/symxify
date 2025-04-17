import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";
export interface DealerCommentPagedListSelectFieldsResponse {
    dealerComment: DealerComment[];
    token: string;
    version1: VersionType;
    messageId: string;
}
