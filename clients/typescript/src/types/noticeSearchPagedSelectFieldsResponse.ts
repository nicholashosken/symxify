import { Notice } from "./notice";
import { VersionType } from "./versionType";

export interface NoticeSearchPagedSelectFieldsResponse {
    notice: Notice[];
    token: string;
    version1: VersionType;
    messageId: string;
}