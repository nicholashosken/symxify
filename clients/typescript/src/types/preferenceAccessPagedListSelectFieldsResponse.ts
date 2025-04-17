import { PreferenceAccess } from "./preferenceAccess";
import { VersionType } from "./versionType";

export interface PreferenceAccessPagedListSelectFieldsResponse {
    preferenceAccess: PreferenceAccess[];
    token: string;
    version1: VersionType;
    messageId: string;
}