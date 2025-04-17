import { AcctTypeName } from "./acctTypeName";
import { VersionType } from "./versionType";
export interface AcctTypeNamePagedListSelectFieldsResponse {
    acctTypeName: AcctTypeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
