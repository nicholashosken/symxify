import { Notice } from "./notice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NoticeSearchPagedSelectFieldsResponse {
    notice: Notice[];
    noticeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}