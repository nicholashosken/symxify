import { ShareName } from "./shareName";
import { VersionType } from "./versionType";
export interface ShareNameSearchPagedSelectFieldsResponse {
    shareName: ShareName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
