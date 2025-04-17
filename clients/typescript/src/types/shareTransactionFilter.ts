import { VersionType } from "./versionType";

export interface ShareTransactionFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}