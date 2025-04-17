import { OnlineCardFields } from "./onlineCardFields";
import { VersionType } from "./versionType";
export interface OnlineCardSingleSelectableFields {
    includeAllOnlineCardFields: boolean | null;
    onlineCardFields: OnlineCardFields;
    version1: VersionType;
}
