import { NoticeFields_2 } from "./noticeFields_2";

export interface NoticeUpdateRequest {
    noticeNoticeTypeValue: number;
    noticeNoticeTypeValueSpecified: boolean;
    noticeNoticeType: number | null;
    noticeNoticeDescrTypeValue: number;
    noticeNoticeDescrTypeValueSpecified: boolean;
    noticeNoticeDescrType: number | null;
    noticeFields: NoticeFields_2;
}