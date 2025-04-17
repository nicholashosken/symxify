import { OnlineSbi } from "./onlineSbi";
import { VersionType } from "./versionType";

export interface OnlineSbiSelectFieldsResponse {
    onlineSbi: OnlineSbi;
    version1: VersionType;
    messageId: string;
}