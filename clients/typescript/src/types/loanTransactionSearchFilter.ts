import { VersionType } from "./versionType";

export interface LoanTransactionSearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}