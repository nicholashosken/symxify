import { SecField } from "./secField";
import { VersionType } from "./versionType";

export interface SecFieldSelectFieldsResponse {
    secField: SecField;
    version1: VersionType;
    messageId: string;
}