import { SecField } from "./secField";
import { VersionType } from "./versionType";
export interface SecFieldSearchPagedSelectFieldsResponse {
    secField: SecField[];
    token: string;
    version1: VersionType;
    messageId: string;
}
