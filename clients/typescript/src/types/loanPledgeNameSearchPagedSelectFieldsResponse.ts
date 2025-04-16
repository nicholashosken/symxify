import { LoanPledgeName } from "./loanPledgeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeNameSearchPagedSelectFieldsResponse {
    loanPledgeName: LoanPledgeName[];
    loanPledgeNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}