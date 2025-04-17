import { CorpTransfer } from "./corpTransfer";
import { VersionType } from "./versionType";

export interface CorpTransferSelectFieldsResponse {
    corpTransfer: CorpTransfer;
    version1: VersionType;
    messageId: string;
}