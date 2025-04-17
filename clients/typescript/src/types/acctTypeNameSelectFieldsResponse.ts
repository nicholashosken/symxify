import { AcctTypeName } from "./acctTypeName";
import { VersionType } from "./versionType";

export interface AcctTypeNameSelectFieldsResponse {
    acctTypeName: AcctTypeName;
    version1: VersionType;
    messageId: string;
}