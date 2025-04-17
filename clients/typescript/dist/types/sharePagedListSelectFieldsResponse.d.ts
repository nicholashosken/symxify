import { Share } from "./share";
import { VersionType } from "./versionType";
export interface SharePagedListSelectFieldsResponse {
    share: Share[];
    token: string;
    version1: VersionType;
    messageId: string;
}
