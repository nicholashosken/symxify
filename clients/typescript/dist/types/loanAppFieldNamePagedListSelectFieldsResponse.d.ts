import { LoanAppFieldName } from "./loanAppFieldName";
import { VersionType } from "./versionType";
export interface LoanAppFieldNamePagedListSelectFieldsResponse {
    loanAppFieldName: LoanAppFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
