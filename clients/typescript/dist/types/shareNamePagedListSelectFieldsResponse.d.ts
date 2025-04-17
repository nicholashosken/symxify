import { ShareName } from "./shareName";
import { VersionType } from "./versionType";
export interface ShareNamePagedListSelectFieldsResponse {
    shareName: ShareName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
