import { OnlineNetFields } from "./onlineNetFields";
import { VersionType } from "./versionType";
export interface OnlineNetSingleSelectableFields {
    includeAllOnlineNetFields: boolean | null;
    onlineNetFields: OnlineNetFields;
    version1: VersionType;
}
