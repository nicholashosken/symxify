import { PreferenceFields } from "./preferenceFields";
import { PreferenceAccessSelectableFields } from "./preferenceAccessSelectableFields";
import { VersionType } from "./versionType";
export interface PreferenceSelectableFields {
    includeAllPreferenceFields: boolean | null;
    preferenceFields: PreferenceFields;
    preferenceAccessSelectableFields: PreferenceAccessSelectableFields;
    version1: VersionType;
}
