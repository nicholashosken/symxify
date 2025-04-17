import { LateChg } from "./lateChg";
import { VersionType } from "./versionType";

export interface LateChgSearchPagedSelectFieldsResponse {
    lateChg: LateChg[];
    token: string;
    version1: VersionType;
    messageId: string;
}