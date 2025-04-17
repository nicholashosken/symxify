import { Share } from "./share";
import { VersionType } from "./versionType";

export interface ShareSelectFieldsFilterChildrenResponse {
    share: Share;
    version1: VersionType;
    messageId: string;
}