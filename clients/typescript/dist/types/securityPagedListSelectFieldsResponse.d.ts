import { Security } from "./security";
import { VersionType } from "./versionType";
export interface SecurityPagedListSelectFieldsResponse {
    security: Security[];
    token: string;
    version1: VersionType;
    messageId: string;
}
