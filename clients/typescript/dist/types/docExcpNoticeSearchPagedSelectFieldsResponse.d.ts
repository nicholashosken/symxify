import { DocExcpNotice } from "./docExcpNotice";
import { VersionType } from "./versionType";
export interface DocExcpNoticeSearchPagedSelectFieldsResponse {
    docExcpNotice: DocExcpNotice[];
    token: string;
    version1: VersionType;
    messageId: string;
}
