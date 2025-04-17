import { VersionType } from "./versionType";

export interface NoticeFields {
    daysBetweenNotices: number[];
    description: boolean | null;
    line1: number[];
    line2: number[];
    line3: number[];
    line4: number[];
    negativeInfoMessage: number[];
    negativeInfoPrintPosition: boolean | null;
    noticeDescrType: boolean | null;
    noticeType: boolean | null;
    useWarningGraceDays: boolean | null;
    warningGraceDays: boolean | null;
    version1: VersionType;
}