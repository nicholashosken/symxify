import { OnlineNet } from "./onlineNet";
import { VersionType } from "./versionType";
export interface OnlineNetSearchPagedSelectFieldsResponse {
    onlineNet: OnlineNet[];
    token: string;
    version1: VersionType;
    messageId: string;
}
