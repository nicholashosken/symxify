import { OnlineSbAddOnFields } from "./onlineSbAddOnFields";
import { VersionType } from "./versionType";

export interface OnlineSbAddOnSelectableFields {
    includeAllOnlineSbAddOnFields: boolean | null;
    onlineSbAddOnFields: OnlineSbAddOnFields;
    version1: VersionType;
}