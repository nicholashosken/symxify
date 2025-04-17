import { ExternalLoanName } from "./externalLoanName";
export interface ExternalLoanNameList {
    hasReachedMaximumListSize: boolean | null;
    externalLoanName: ExternalLoanName[];
}
