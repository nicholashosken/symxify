import { WireFmHistory } from "./wireFmHistory";
import { VersionType } from "./versionType";

export interface WireFmHistorySearchPagedSelectFieldsResponse {
    wireFmHistory: WireFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}