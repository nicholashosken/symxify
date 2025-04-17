import { OnlineSba } from "./onlineSba";
import { VersionType } from "./versionType";
export interface OnlineSbaSelectFieldsResponse {
    onlineSba: OnlineSba;
    version1: VersionType;
    messageId: string;
}
