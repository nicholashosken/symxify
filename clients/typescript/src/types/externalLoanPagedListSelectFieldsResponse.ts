import { ExternalLoan } from "./externalLoan";
import { VersionType } from "./versionType";

export interface ExternalLoanPagedListSelectFieldsResponse {
    externalLoan: ExternalLoan[];
    token: string;
    version1: VersionType;
    messageId: string;
}