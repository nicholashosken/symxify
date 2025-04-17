import { CheckOrderDefault } from "./checkOrderDefault";
import { VersionType } from "./versionType";
export interface CheckOrderDefaultPagedListSelectFieldsResponse {
    checkOrderDefault: CheckOrderDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
