import { VersionType } from "./versionType";

export interface ParticipantFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}