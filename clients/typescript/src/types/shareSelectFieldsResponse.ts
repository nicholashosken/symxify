import { Share } from "./share";
import { VersionType } from "./versionType";

export interface ShareSelectFieldsResponse {
    share: Share;
    version1: VersionType;
    messageId: string;
}