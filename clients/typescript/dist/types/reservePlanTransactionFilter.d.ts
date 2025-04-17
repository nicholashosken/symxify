import { VersionType } from "./versionType";
export interface ReservePlanTransactionFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
