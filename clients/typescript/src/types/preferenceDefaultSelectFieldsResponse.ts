import { PreferenceDefault } from "./preferenceDefault";
import { VersionType } from "./versionType";

export interface PreferenceDefaultSelectFieldsResponse {
    preferenceDefault: PreferenceDefault;
    version1: VersionType;
    messageId: string;
}