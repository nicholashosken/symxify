import { VersionType } from "./versionType";

export interface ShareTransactionSearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}