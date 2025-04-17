import { UserFm } from "./userFm";
import { VersionType } from "./versionType";
export interface UserFmSelectFieldsResponse {
    userFm: UserFm;
    version1: VersionType;
    messageId: string;
}
