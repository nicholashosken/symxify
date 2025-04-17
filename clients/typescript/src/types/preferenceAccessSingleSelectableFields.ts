import { PreferenceAccessFields } from "./preferenceAccessFields";
import { VersionType } from "./versionType";

export interface PreferenceAccessSingleSelectableFields {
    includeAllPreferenceAccessFields: boolean | null;
    preferenceAccessFields: PreferenceAccessFields;
    version1: VersionType;
}