import { Preference } from "./preference";
import { VersionType } from "./versionType";
export interface PreferencePagedListSelectFieldsResponse {
    preference: Preference[];
    token: string;
    version1: VersionType;
    messageId: string;
}
