import { Preference } from "./preference";
import { VersionType } from "./versionType";

export interface PreferenceSelectFieldsResponse {
    preference: Preference;
    version1: VersionType;
    messageId: string;
}