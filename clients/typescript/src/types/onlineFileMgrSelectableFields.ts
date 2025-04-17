import { OnlineFileMgrFields } from "./onlineFileMgrFields";
import { VersionType } from "./versionType";

export interface OnlineFileMgrSelectableFields {
    includeAllOnlineFileMgrFields: boolean | null;
    onlineFileMgrFields: OnlineFileMgrFields;
    version1: VersionType;
}