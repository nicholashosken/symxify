import { Notice } from "./notice";

export interface NoticeList {
    hasReachedMaximumListSize: boolean | null;
    notice: Notice[];
}