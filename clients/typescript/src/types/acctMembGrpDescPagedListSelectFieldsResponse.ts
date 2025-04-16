import { AcctMembGrpDesc } from "./acctMembGrpDesc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctMembGrpDescPagedListSelectFieldsResponse {
    acctMembGrpDesc: AcctMembGrpDesc[];
    acctMembGrpDescSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}