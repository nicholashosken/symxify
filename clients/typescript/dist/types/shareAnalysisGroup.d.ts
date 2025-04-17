import { VersionType } from "./versionType";
export interface ShareAnalysisGroup {
    accountNumber: string;
    comment1: string;
    id: string;
    locator: number | null;
    recordChangeDate: string | null;
    version1: VersionType;
}
