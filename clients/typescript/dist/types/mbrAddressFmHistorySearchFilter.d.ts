import { VersionType } from "./versionType";
export interface MbrAddressFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
