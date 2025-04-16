import { DocExcpNotice } from "./docExcpNotice";

export interface DocExcpNoticeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    docExcpNotice: DocExcpNotice[];
    docExcpNoticeSpecified: boolean;
}