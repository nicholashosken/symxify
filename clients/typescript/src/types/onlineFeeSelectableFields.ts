import { OnlineFeeFields } from "./onlineFeeFields";
import { VersionType } from "./versionType";

export interface OnlineFeeSelectableFields {
    includeAllOnlineFeeFields: boolean | null;
    onlineFeeFields: OnlineFeeFields;
    version1: VersionType;
}