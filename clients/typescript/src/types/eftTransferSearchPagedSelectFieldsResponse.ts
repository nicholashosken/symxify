import { EftTransfer } from "./eftTransfer";
import { VersionType } from "./versionType";

export interface EftTransferSearchPagedSelectFieldsResponse {
    eftTransfer: EftTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}