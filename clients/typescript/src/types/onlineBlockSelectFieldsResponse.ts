import { OnlineBlock } from "./onlineBlock";
import { VersionType } from "./versionType";

export interface OnlineBlockSelectFieldsResponse {
    onlineBlock: OnlineBlock;
    version1: VersionType;
    messageId: string;
}