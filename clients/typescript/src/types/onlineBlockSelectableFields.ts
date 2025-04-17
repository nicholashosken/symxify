import { OnlineBlockFields } from "./onlineBlockFields";
import { VersionType } from "./versionType";

export interface OnlineBlockSelectableFields {
    includeAllOnlineBlockFields: boolean | null;
    onlineBlockFields: OnlineBlockFields;
    version1: VersionType;
}