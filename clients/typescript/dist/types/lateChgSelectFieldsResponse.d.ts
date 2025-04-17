import { LateChg } from "./lateChg";
import { VersionType } from "./versionType";
export interface LateChgSelectFieldsResponse {
    lateChg: LateChg;
    version1: VersionType;
    messageId: string;
}
