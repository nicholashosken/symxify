import { ShareHold } from "./shareHold";
import { VersionType } from "./versionType";
export interface ShareHoldPagedListSelectFieldsResponse {
    shareHold: ShareHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}
