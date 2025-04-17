import { ShareTransfer } from "./shareTransfer";
import { VersionType } from "./versionType";

export interface ShareTransferPagedListSelectFieldsResponse {
    shareTransfer: ShareTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}