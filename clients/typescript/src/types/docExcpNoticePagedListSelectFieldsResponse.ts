import { DocExcpNotice } from "./docExcpNotice";
import { VersionType } from "./versionType";

export interface DocExcpNoticePagedListSelectFieldsResponse {
    docExcpNotice: DocExcpNotice[];
    token: string;
    version1: VersionType;
    messageId: string;
}