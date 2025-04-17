import { CheckOrderDefaultFields } from "./checkOrderDefaultFields";
import { VersionType } from "./versionType";

export interface CheckOrderDefaultSelectableFields {
    includeAllCheckOrderDefaultFields: boolean | null;
    checkOrderDefaultFields: CheckOrderDefaultFields;
    version1: VersionType;
}