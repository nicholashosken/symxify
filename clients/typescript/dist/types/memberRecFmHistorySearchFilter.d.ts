import { VersionType } from "./versionType";
export interface MemberRecFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
