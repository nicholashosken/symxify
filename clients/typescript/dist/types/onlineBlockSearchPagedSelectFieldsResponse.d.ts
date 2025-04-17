import { OnlineBlock } from "./onlineBlock";
import { VersionType } from "./versionType";
export interface OnlineBlockSearchPagedSelectFieldsResponse {
    onlineBlock: OnlineBlock[];
    token: string;
    version1: VersionType;
    messageId: string;
}
