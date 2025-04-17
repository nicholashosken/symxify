import { Security } from "./security";
import { VersionType } from "./versionType";

export interface SecuritySelectFieldsResponse {
    security: Security;
    version1: VersionType;
    messageId: string;
}