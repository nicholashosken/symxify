import { OnlineCardFields } from "./onlineCardFields";
import { VersionType } from "./versionType";

export interface OnlineCardSelectableFields {
    includeAllOnlineCardFields: boolean | null;
    onlineCardFields: OnlineCardFields;
    version1: VersionType;
}