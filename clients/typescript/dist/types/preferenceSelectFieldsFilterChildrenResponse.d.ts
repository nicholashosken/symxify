import { Preference } from "./preference";
import { VersionType } from "./versionType";
export interface PreferenceSelectFieldsFilterChildrenResponse {
    preference: Preference;
    version1: VersionType;
    messageId: string;
}
