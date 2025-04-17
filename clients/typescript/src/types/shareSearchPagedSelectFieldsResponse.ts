import { Share } from "./share";
import { VersionType } from "./versionType";

export interface ShareSearchPagedSelectFieldsResponse {
    share: Share[];
    token: string;
    version1: VersionType;
    messageId: string;
}