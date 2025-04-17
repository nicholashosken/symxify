import { VersionType } from "./versionType";
export interface LoanTransactionFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
