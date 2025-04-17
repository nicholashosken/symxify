import { OnlineOutlet } from "./onlineOutlet";
import { VersionType } from "./versionType";

export interface OnlineOutletSelectFieldsResponse {
    onlineOutlet: OnlineOutlet;
    version1: VersionType;
    messageId: string;
}