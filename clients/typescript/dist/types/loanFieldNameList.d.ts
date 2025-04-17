import { LoanFieldName } from "./loanFieldName";
export interface LoanFieldNameList {
    hasReachedMaximumListSize: boolean | null;
    loanFieldName: LoanFieldName[];
}
