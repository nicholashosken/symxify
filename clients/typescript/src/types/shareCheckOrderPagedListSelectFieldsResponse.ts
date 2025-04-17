import { ShareCheckOrder } from "./shareCheckOrder";
import { VersionType } from "./versionType";

export interface ShareCheckOrderPagedListSelectFieldsResponse {
    shareCheckOrder: ShareCheckOrder[];
    token: string;
    version1: VersionType;
    messageId: string;
}