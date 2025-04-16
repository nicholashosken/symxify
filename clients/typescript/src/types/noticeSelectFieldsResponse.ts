import { Notice } from "./notice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NoticeSelectFieldsResponse {
    notice: Notice;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}