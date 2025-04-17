import { CheckOrderDefaultFields } from "./checkOrderDefaultFields";
import { VersionType } from "./versionType";
export interface CheckOrderDefaultSingleSelectableFields {
    includeAllCheckOrderDefaultFields: boolean | null;
    checkOrderDefaultFields: CheckOrderDefaultFields;
    version1: VersionType;
}
