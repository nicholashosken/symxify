import { ExternalLoan } from "./externalLoan";
import { VersionType } from "./versionType";

export interface ExternalLoanSelectFieldsResponse {
    externalLoan: ExternalLoan;
    version1: VersionType;
    messageId: string;
}