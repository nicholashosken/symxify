import { ShareHold } from "./shareHold";
import { VersionType } from "./versionType";
export interface ShareHoldSelectFieldsResponse {
    shareHold: ShareHold;
    version1: VersionType;
    messageId: string;
}
