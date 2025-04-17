import { VersionType } from "./versionType";
export interface LoanAppDenial {
    denialNotice: number | null;
    denialNoticeDescription: string;
    denialNoticeSpecfile: string;
    version1: VersionType;
}
