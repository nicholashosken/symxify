import { CheckOrderDefault } from "./checkOrderDefault";
import { VersionType } from "./versionType";
export interface CheckOrderDefaultSearchPagedSelectFieldsResponse {
    checkOrderDefault: CheckOrderDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
