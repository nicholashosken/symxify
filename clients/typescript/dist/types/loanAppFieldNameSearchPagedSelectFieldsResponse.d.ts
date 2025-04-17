import { LoanAppFieldName } from "./loanAppFieldName";
import { VersionType } from "./versionType";
export interface LoanAppFieldNameSearchPagedSelectFieldsResponse {
    loanAppFieldName: LoanAppFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
