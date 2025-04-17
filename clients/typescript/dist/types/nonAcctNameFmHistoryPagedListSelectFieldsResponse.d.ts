import { NonAcctNameFmHistory } from "./nonAcctNameFmHistory";
import { VersionType } from "./versionType";
export interface NonAcctNameFmHistoryPagedListSelectFieldsResponse {
    nonAcctNameFmHistory: NonAcctNameFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
