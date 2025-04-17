import { ExcpAddInfo } from "./excpAddInfo";
import { VersionType } from "./versionType";

export interface ExcpAddInfoSearchPagedSelectFieldsResponse {
    excpAddInfo: ExcpAddInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}