import { VersionType } from "./versionType";
export interface LoanAppDenialFields {
    denialNotice: boolean | null;
    denialNoticeDescription: boolean | null;
    denialNoticeSpecfile: boolean | null;
    version1: VersionType;
}
