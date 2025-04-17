import { ExternalLoan } from "./externalLoan";
import { VersionType } from "./versionType";

export interface ExternalLoanSearchPagedSelectFieldsResponse {
    externalLoan: ExternalLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}