import { ShareCheckOrder } from "./shareCheckOrder";
import { VersionType } from "./versionType";
export interface ShareCheckOrderSelectFieldsResponse {
    shareCheckOrder: ShareCheckOrder;
    version1: VersionType;
    messageId: string;
}
