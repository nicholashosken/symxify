import { NoticeFields } from "./noticeFields";
import { VersionType } from "./versionType";

export interface NoticeSingleSelectableFields {
    includeAllNoticeFields: boolean | null;
    noticeFields: NoticeFields;
    version1: VersionType;
}