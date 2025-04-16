import { DocExcpNoticeFields } from "./docExcpNoticeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocExcpNoticeSingleSelectableFields {
    includeAllDocExcpNoticeFieldsValue: boolean;
    includeAllDocExcpNoticeFieldsValueSpecified: boolean;
    includeAllDocExcpNoticeFields: boolean | null;
    docExcpNoticeFields: DocExcpNoticeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
