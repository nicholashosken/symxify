import { EftTransfer } from "./eftTransfer";
import { VersionType } from "./versionType";
export interface EftTransferSelectFieldsResponse {
    eftTransfer: EftTransfer;
    version1: VersionType;
    messageId: string;
}
