import { Notice } from "./notice";
import { VersionType } from "./versionType";
export interface NoticeSelectFieldsResponse {
    notice: Notice;
    version1: VersionType;
    messageId: string;
}
