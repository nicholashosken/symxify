import { ExternalLoanTransfer } from "./externalLoanTransfer";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferPagedListSelectFieldsResponse {
    externalLoanTransfer: ExternalLoanTransfer[];
    token: string;
    version1: VersionType;
    messageId: string;
}
