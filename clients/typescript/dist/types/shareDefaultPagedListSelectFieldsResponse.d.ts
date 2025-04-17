import { ShareDefault } from "./shareDefault";
import { VersionType } from "./versionType";
export interface ShareDefaultPagedListSelectFieldsResponse {
    shareDefault: ShareDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
