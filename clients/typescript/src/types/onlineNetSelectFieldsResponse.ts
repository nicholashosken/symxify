import { OnlineNet } from "./onlineNet";
import { VersionType } from "./versionType";

export interface OnlineNetSelectFieldsResponse {
    onlineNet: OnlineNet;
    version1: VersionType;
    messageId: string;
}