import { LoanAppPledge } from "./loanAppPledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPledgePagedListSelectFieldsResponse {
    loanAppPledge: LoanAppPledge[];
    loanAppPledgeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
