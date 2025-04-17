import { PrivGroupFields } from "./privGroupFields";
import { VersionType } from "./versionType";

export interface PrivGroupSelectableFields {
    includeAllPrivGroupFields: boolean | null;
    privGroupFields: PrivGroupFields;
    version1: VersionType;
}