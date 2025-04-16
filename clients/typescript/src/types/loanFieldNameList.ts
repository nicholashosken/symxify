import { LoanFieldName } from "./loanFieldName";

export interface LoanFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanFieldName: LoanFieldName[];
    loanFieldNameSpecified: boolean;
}