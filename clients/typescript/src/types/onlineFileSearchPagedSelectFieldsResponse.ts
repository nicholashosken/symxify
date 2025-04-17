import { OnlineFile } from "./onlineFile";
import { VersionType } from "./versionType";

export interface OnlineFileSearchPagedSelectFieldsResponse {
    onlineFile: OnlineFile[];
    token: string;
    version1: VersionType;
    messageId: string;
}