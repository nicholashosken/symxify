import { LoanFieldName } from "./loanFieldName";
import { VersionType } from "./versionType";
export interface LoanFieldNamePagedListSelectFieldsResponse {
    loanFieldName: LoanFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
