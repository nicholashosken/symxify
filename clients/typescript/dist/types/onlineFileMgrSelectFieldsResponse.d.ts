import { OnlineFileMgr } from "./onlineFileMgr";
import { VersionType } from "./versionType";
export interface OnlineFileMgrSelectFieldsResponse {
    onlineFileMgr: OnlineFileMgr;
    version1: VersionType;
    messageId: string;
}
