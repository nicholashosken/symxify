import { AcctMembGrpDesc } from "./acctMembGrpDesc";
import { VersionType } from "./versionType";

export interface AcctMembGrpDescSearchPagedSelectFieldsResponse {
    acctMembGrpDesc: AcctMembGrpDesc[];
    token: string;
    version1: VersionType;
    messageId: string;
}