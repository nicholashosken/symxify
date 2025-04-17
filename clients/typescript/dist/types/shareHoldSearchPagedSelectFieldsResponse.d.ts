import { ShareHold } from "./shareHold";
import { VersionType } from "./versionType";
export interface ShareHoldSearchPagedSelectFieldsResponse {
    shareHold: ShareHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}
