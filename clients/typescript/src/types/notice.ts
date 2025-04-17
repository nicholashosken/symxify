import { NoticeDaysBetweenNotices } from "./noticeDaysBetweenNotices";
import { NoticeLine1 } from "./noticeLine1";
import { NoticeLine2 } from "./noticeLine2";
import { NoticeLine3 } from "./noticeLine3";
import { NoticeLine4 } from "./noticeLine4";
import { NoticeNegativeInfoMessage } from "./noticeNegativeInfoMessage";
import { VersionType } from "./versionType";

export interface Notice {
    daysBetweenNotices: NoticeDaysBetweenNotices[];
    description: string;
    line1: NoticeLine1[];
    line2: NoticeLine2[];
    line3: NoticeLine3[];
    line4: NoticeLine4[];
    negativeInfoMessage: NoticeNegativeInfoMessage[];
    negativeInfoPrintPosition: number | null;
    noticeDescrType: number | null;
    noticeType: number | null;
    useWarningGraceDays: number | null;
    warningGraceDays: number | null;
    version1: VersionType;
}