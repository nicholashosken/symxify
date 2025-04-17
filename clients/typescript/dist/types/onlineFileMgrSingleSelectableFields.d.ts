import { OnlineFileMgrFields } from "./onlineFileMgrFields";
import { VersionType } from "./versionType";
export interface OnlineFileMgrSingleSelectableFields {
    includeAllOnlineFileMgrFields: boolean | null;
    onlineFileMgrFields: OnlineFileMgrFields;
    version1: VersionType;
}
