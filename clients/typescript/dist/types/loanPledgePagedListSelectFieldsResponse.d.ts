import { LoanPledge } from "./loanPledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanPledgePagedListSelectFieldsResponse {
    loanPledge: LoanPledge[];
    loanPledgeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
