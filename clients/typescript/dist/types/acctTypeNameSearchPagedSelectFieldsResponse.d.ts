import { AcctTypeName } from "./acctTypeName";
import { VersionType } from "./versionType";
export interface AcctTypeNameSearchPagedSelectFieldsResponse {
    acctTypeName: AcctTypeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
