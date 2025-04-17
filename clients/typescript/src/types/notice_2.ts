import { NoticeDaysBetweenNotices_2 } from "./noticeDaysBetweenNotices_2";
import { NoticeLine1_2 } from "./noticeLine1_2";
import { NoticeLine2_2 } from "./noticeLine2_2";
import { NoticeLine3_2 } from "./noticeLine3_2";
import { NoticeLine4_2 } from "./noticeLine4_2";
import { NoticeNegativeInfoMessage_2 } from "./noticeNegativeInfoMessage_2";
import { VersionType } from "./versionType";

export interface Notice_2 {
    daysBetweenNotices: NoticeDaysBetweenNotices_2[];
    description: string;
    line1: NoticeLine1_2[];
    line2: NoticeLine2_2[];
    line3: NoticeLine3_2[];
    line4: NoticeLine4_2[];
    negativeInfoMessage: NoticeNegativeInfoMessage_2[];
    negativeInfoPrintPosition: number | null;
    noticeDescrType: number | null;
    noticeType: number | null;
    useWarningGraceDays: number | null;
    warningGraceDays: number | null;
    version1: VersionType;
}