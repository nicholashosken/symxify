import { VersionType } from "./versionType";

export interface PagingRequestContext {
    numberOfRecordsToReturn: number | null;
    numberOfRecordsToSkip: number | null;
    token: string;
    version1: VersionType;
}