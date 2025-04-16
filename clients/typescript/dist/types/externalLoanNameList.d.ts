import { ExternalLoanName } from "./externalLoanName";
export interface ExternalLoanNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalLoanName: ExternalLoanName[];
    externalLoanNameSpecified: boolean;
}
