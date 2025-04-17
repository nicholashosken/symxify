import { CheckFmHistory } from "./checkFmHistory";
import { VersionType } from "./versionType";
export interface CheckFmHistorySearchPagedSelectFieldsResponse {
    checkFmHistory: CheckFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
