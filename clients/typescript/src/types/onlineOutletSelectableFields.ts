import { OnlineOutletFields } from "./onlineOutletFields";
import { VersionType } from "./versionType";

export interface OnlineOutletSelectableFields {
    includeAllOnlineOutletFields: boolean | null;
    onlineOutletFields: OnlineOutletFields;
    version1: VersionType;
}