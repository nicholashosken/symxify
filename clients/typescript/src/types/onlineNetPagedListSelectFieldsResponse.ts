import { OnlineNet } from "./onlineNet";
import { VersionType } from "./versionType";

export interface OnlineNetPagedListSelectFieldsResponse {
    onlineNet: OnlineNet[];
    token: string;
    version1: VersionType;
    messageId: string;
}