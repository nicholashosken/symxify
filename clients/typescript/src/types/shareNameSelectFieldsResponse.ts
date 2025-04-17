import { ShareName } from "./shareName";
import { VersionType } from "./versionType";

export interface ShareNameSelectFieldsResponse {
    shareName: ShareName;
    version1: VersionType;
    messageId: string;
}