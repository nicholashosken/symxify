import { NoticeFields } from "./noticeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NoticeSelectableFields {
    includeAllNoticeFieldsValue: boolean;
    includeAllNoticeFieldsValueSpecified: boolean;
    includeAllNoticeFields: boolean | null;
    noticeFields: NoticeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
