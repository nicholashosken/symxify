import { ExcpAddInfo } from "./excpAddInfo";
import { VersionType } from "./versionType";
export interface ExcpAddInfoSelectFieldsResponse {
    excpAddInfo: ExcpAddInfo;
    version1: VersionType;
    messageId: string;
}
