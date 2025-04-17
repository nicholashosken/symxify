import { PreferenceDefaultFields } from "./preferenceDefaultFields";
import { VersionType } from "./versionType";
export interface PreferenceDefaultSelectableFields {
    includeAllPreferenceDefaultFields: boolean | null;
    preferenceDefaultFields: PreferenceDefaultFields;
    version1: VersionType;
}
