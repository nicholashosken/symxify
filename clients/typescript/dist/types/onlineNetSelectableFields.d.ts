import { OnlineNetFields } from "./onlineNetFields";
import { VersionType } from "./versionType";
export interface OnlineNetSelectableFields {
    includeAllOnlineNetFields: boolean | null;
    onlineNetFields: OnlineNetFields;
    version1: VersionType;
}
