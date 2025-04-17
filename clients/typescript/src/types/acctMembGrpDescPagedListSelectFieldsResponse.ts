import { AcctMembGrpDesc } from "./acctMembGrpDesc";
import { VersionType } from "./versionType";

export interface AcctMembGrpDescPagedListSelectFieldsResponse {
    acctMembGrpDesc: AcctMembGrpDesc[];
    token: string;
    version1: VersionType;
    messageId: string;
}