import { NoticeFields } from "./noticeFields";
import { VersionType } from "./versionType";
export interface NoticeSelectableFields {
    includeAllNoticeFields: boolean | null;
    noticeFields: NoticeFields;
    version1: VersionType;
}
