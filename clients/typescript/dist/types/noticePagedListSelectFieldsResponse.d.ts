import { Notice } from "./notice";
import { VersionType } from "./versionType";
export interface NoticePagedListSelectFieldsResponse {
    notice: Notice[];
    token: string;
    version1: VersionType;
    messageId: string;
}
