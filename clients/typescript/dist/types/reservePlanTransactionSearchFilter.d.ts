import { VersionType } from "./versionType";
export interface ReservePlanTransactionSearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
