import { OnlineBlock } from "./onlineBlock";
import { VersionType } from "./versionType";
export interface OnlineBlockPagedListSelectFieldsResponse {
    onlineBlock: OnlineBlock[];
    token: string;
    version1: VersionType;
    messageId: string;
}
