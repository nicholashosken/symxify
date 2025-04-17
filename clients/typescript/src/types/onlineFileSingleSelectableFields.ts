import { OnlineFileFields } from "./onlineFileFields";
import { VersionType } from "./versionType";

export interface OnlineFileSingleSelectableFields {
    includeAllOnlineFileFields: boolean | null;
    onlineFileFields: OnlineFileFields;
    version1: VersionType;
}