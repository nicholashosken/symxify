import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";

export interface DealerCommentSearchPagedSelectFieldsResponse {
    dealerComment: DealerComment[];
    token: string;
    version1: VersionType;
    messageId: string;
}