import { OnlineBlockFields } from "./onlineBlockFields";
import { VersionType } from "./versionType";
export interface OnlineBlockSingleSelectableFields {
    includeAllOnlineBlockFields: boolean | null;
    onlineBlockFields: OnlineBlockFields;
    version1: VersionType;
}
