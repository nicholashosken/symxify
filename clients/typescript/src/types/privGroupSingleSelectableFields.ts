import { PrivGroupFields } from "./privGroupFields";
import { VersionType } from "./versionType";

export interface PrivGroupSingleSelectableFields {
    includeAllPrivGroupFields: boolean | null;
    privGroupFields: PrivGroupFields;
    version1: VersionType;
}