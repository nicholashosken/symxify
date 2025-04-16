import { LoanPledge } from "./loanPledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanPledgeSelectFieldsFilterChildrenResponse {
    loanPledge: LoanPledge;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
