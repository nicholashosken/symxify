import { LateChg } from "./lateChg";
import { VersionType } from "./versionType";
export interface LateChgPagedListSelectFieldsResponse {
    lateChg: LateChg[];
    token: string;
    version1: VersionType;
    messageId: string;
}
