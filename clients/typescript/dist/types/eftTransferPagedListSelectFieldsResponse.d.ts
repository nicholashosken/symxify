import { EftTransfer } from "./eftTransfer";
import { VersionType } from "./versionType";
export interface EftTransferPagedListSelectFieldsResponse {
    eftTransfer: EftTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}
