import { CollatrlTrackingTypeFields } from "./collatrlTrackingTypeFields";
import { VersionType } from "./versionType";

export interface CollatrlTrackingTypeSelectableFields {
    includeAllCollatrlTrackingTypeFields: boolean | null;
    collatrlTrackingTypeFields: CollatrlTrackingTypeFields;
    version1: VersionType;
}