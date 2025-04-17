import { LoanAppDefault } from "./loanAppDefault";
import { VersionType } from "./versionType";

export interface LoanAppDefaultSelectFieldsResponse {
    loanAppDefault: LoanAppDefault;
    version1: VersionType;
    messageId: string;
}