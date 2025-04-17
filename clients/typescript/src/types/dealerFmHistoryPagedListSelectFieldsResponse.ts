import { DealerFmHistory } from "./dealerFmHistory";
import { VersionType } from "./versionType";

export interface DealerFmHistoryPagedListSelectFieldsResponse {
    dealerFmHistory: DealerFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}