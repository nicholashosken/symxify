import { OnlineMain } from "./onlineMain";
import { VersionType } from "./versionType";

export interface OnlineMainSelectFieldsResponse {
    onlineMain: OnlineMain;
    version1: VersionType;
    messageId: string;
}