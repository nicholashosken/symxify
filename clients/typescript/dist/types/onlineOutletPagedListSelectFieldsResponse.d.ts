import { OnlineOutlet } from "./onlineOutlet";
import { VersionType } from "./versionType";
export interface OnlineOutletPagedListSelectFieldsResponse {
    onlineOutlet: OnlineOutlet[];
    token: string;
    version1: VersionType;
    messageId: string;
}
