import { ShareCheckOrder } from "./shareCheckOrder";
import { VersionType } from "./versionType";

export interface ShareCheckOrderSearchPagedSelectFieldsResponse {
    shareCheckOrder: ShareCheckOrder[];
    token: string;
    version1: VersionType;
    messageId: string;
}