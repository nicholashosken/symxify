import { LoanFieldName } from "./loanFieldName";
import { VersionType } from "./versionType";

export interface LoanFieldNameSearchPagedSelectFieldsResponse {
    loanFieldName: LoanFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}