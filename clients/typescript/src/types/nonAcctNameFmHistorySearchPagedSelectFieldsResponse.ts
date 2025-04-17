import { NonAcctNameFmHistory } from "./nonAcctNameFmHistory";
import { VersionType } from "./versionType";

export interface NonAcctNameFmHistorySearchPagedSelectFieldsResponse {
    nonAcctNameFmHistory: NonAcctNameFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}