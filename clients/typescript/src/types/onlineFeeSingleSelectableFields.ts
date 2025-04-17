import { OnlineFeeFields } from "./onlineFeeFields";
import { VersionType } from "./versionType";

export interface OnlineFeeSingleSelectableFields {
    includeAllOnlineFeeFields: boolean | null;
    onlineFeeFields: OnlineFeeFields;
    version1: VersionType;
}