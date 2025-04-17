import { OnlineMainFields } from "./onlineMainFields";
import { VersionType } from "./versionType";

export interface OnlineMainSelectableFields {
    includeAllOnlineMainFields: boolean | null;
    onlineMainFields: OnlineMainFields;
    version1: VersionType;
}