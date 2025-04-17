import { MemberRecFmHistory } from "./memberRecFmHistory";
import { VersionType } from "./versionType";

export interface MemberRecFmHistorySearchPagedSelectFieldsResponse {
    memberRecFmHistory: MemberRecFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}