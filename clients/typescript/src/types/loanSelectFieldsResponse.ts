import { Loan } from "./loan";
import { VersionType } from "./versionType";

export interface LoanSelectFieldsResponse {
    loan: Loan;
    version1: VersionType;
    messageId: string;
}