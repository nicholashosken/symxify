import { DocExcpNoticeFields } from "./docExcpNoticeFields";
import { VersionType } from "./versionType";

export interface DocExcpNoticeSingleSelectableFields {
    includeAllDocExcpNoticeFields: boolean | null;
    docExcpNoticeFields: DocExcpNoticeFields;
    version1: VersionType;
}