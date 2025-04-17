import { PreferenceAccess } from "./preferenceAccess";
import { VersionType } from "./versionType";
export interface PreferenceAccessSelectFieldsResponse {
    preferenceAccess: PreferenceAccess;
    version1: VersionType;
    messageId: string;
}
