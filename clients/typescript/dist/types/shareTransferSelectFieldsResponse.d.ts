import { ShareTransfer } from "./shareTransfer";
import { VersionType } from "./versionType";
export interface ShareTransferSelectFieldsResponse {
    shareTransfer: ShareTransfer;
    version1: VersionType;
    messageId: string;
}
