import { ShareDefault } from "./shareDefault";
import { VersionType } from "./versionType";

export interface ShareDefaultSelectFieldsResponse {
    shareDefault: ShareDefault;
    version1: VersionType;
    messageId: string;
}