import { PreferenceFields } from "./preferenceFields";
import { VersionType } from "./versionType";

export interface PreferenceSingleSelectableFields {
    includeAllPreferenceFields: boolean | null;
    preferenceFields: PreferenceFields;
    version1: VersionType;
}