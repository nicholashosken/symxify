import { DocExcpNotice } from "./docExcpNotice";
import { VersionType } from "./versionType";
export interface DocExcpNoticeSelectFieldsResponse {
    docExcpNotice: DocExcpNotice;
    version1: VersionType;
    messageId: string;
}
