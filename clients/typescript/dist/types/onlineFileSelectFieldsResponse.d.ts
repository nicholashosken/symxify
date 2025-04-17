import { OnlineFile } from "./onlineFile";
import { VersionType } from "./versionType";
export interface OnlineFileSelectFieldsResponse {
    onlineFile: OnlineFile;
    version1: VersionType;
    messageId: string;
}
