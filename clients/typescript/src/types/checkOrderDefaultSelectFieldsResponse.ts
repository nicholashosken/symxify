import { CheckOrderDefault } from "./checkOrderDefault";
import { VersionType } from "./versionType";

export interface CheckOrderDefaultSelectFieldsResponse {
    checkOrderDefault: CheckOrderDefault;
    version1: VersionType;
    messageId: string;
}