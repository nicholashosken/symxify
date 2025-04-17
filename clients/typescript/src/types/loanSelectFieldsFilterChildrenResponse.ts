import { Loan } from "./loan";
import { VersionType } from "./versionType";

export interface LoanSelectFieldsFilterChildrenResponse {
    loan: Loan;
    version1: VersionType;
    messageId: string;
}