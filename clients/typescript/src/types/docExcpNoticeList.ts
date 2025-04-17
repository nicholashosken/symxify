import { DocExcpNotice } from "./docExcpNotice";

export interface DocExcpNoticeList {
    hasReachedMaximumListSize: boolean | null;
    docExcpNotice: DocExcpNotice[];
}