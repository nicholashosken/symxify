import { MemberRecFmHistory } from "./memberRecFmHistory";
import { VersionType } from "./versionType";
export interface MemberRecFmHistoryPagedListSelectFieldsResponse {
    memberRecFmHistory: MemberRecFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
