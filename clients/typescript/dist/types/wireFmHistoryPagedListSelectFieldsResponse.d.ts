import { WireFmHistory } from "./wireFmHistory";
import { VersionType } from "./versionType";
export interface WireFmHistoryPagedListSelectFieldsResponse {
    wireFmHistory: WireFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
