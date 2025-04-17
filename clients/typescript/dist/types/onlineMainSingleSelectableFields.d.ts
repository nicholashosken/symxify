import { OnlineMainFields } from "./onlineMainFields";
import { VersionType } from "./versionType";
export interface OnlineMainSingleSelectableFields {
    includeAllOnlineMainFields: boolean | null;
    onlineMainFields: OnlineMainFields;
    version1: VersionType;
}
