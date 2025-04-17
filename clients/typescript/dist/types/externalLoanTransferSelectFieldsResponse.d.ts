import { ExternalLoanTransfer } from "./externalLoanTransfer";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferSelectFieldsResponse {
    externalLoanTransfer: ExternalLoanTransfer;
    version1: VersionType;
    messageId: string;
}
