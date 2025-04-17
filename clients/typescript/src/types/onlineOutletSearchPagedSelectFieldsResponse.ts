import { OnlineOutlet } from "./onlineOutlet";
import { VersionType } from "./versionType";

export interface OnlineOutletSearchPagedSelectFieldsResponse {
    onlineOutlet: OnlineOutlet[];
    token: string;
    version1: VersionType;
    messageId: string;
}