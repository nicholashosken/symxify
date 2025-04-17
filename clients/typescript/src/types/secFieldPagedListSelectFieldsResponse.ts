import { SecField } from "./secField";
import { VersionType } from "./versionType";

export interface SecFieldPagedListSelectFieldsResponse {
    secField: SecField[];
    token: string;
    version1: VersionType;
    messageId: string;
}