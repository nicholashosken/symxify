import { OnlineSbiFields } from "./onlineSbiFields";
import { VersionType } from "./versionType";

export interface OnlineSbiSelectableFields {
    includeAllOnlineSbiFields: boolean | null;
    onlineSbiFields: OnlineSbiFields;
    version1: VersionType;
}