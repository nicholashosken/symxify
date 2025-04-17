import { DocExcpNoticeFields } from "./docExcpNoticeFields";
import { VersionType } from "./versionType";
export interface DocExcpNoticeSelectableFields {
    includeAllDocExcpNoticeFields: boolean | null;
    docExcpNoticeFields: DocExcpNoticeFields;
    version1: VersionType;
}
