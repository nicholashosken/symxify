import { Notice } from "./notice";
export interface NoticeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    notice: Notice[];
    noticeSpecified: boolean;
}
