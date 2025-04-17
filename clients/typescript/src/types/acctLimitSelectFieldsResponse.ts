import { AcctLimit } from "./acctLimit";
import { VersionType } from "./versionType";

export interface AcctLimitSelectFieldsResponse {
    acctLimit: AcctLimit;
    version1: VersionType;
    messageId: string;
}