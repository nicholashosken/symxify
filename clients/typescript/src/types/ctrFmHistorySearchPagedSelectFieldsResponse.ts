import { CtrFmHistory } from "./ctrFmHistory";
import { VersionType } from "./versionType";

export interface CtrFmHistorySearchPagedSelectFieldsResponse {
    ctrFmHistory: CtrFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}