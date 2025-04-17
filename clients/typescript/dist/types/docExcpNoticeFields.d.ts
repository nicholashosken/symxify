import { VersionType } from "./versionType";
export interface DocExcpNoticeFields {
    daysAfterPreviousNotice: boolean | null;
    line1: boolean | null;
    line2: boolean | null;
    line3: boolean | null;
    line4: boolean | null;
    noticeNumber: boolean | null;
    version1: VersionType;
}
