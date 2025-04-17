import { ShareDefault } from "./shareDefault";
import { VersionType } from "./versionType";

export interface ShareDefaultSearchPagedSelectFieldsResponse {
    shareDefault: ShareDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}