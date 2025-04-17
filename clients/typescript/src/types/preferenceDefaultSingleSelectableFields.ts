import { PreferenceDefaultFields } from "./preferenceDefaultFields";
import { VersionType } from "./versionType";

export interface PreferenceDefaultSingleSelectableFields {
    includeAllPreferenceDefaultFields: boolean | null;
    preferenceDefaultFields: PreferenceDefaultFields;
    version1: VersionType;
}