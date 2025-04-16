import { DocExcpNotice } from "./docExcpNotice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocExcpNoticeSelectFieldsResponse {
    docExcpNotice: DocExcpNotice;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}