import { FmHistory } from "./fmHistory";
import { VersionType } from "./versionType";

export interface FmHistoryPagedListSelectFieldsResponse {
    fmHistory: FmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}