import { VersionType } from "./versionType";
export interface MemberRecFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
