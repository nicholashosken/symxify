import { LoanAppPledge } from "./loanAppPledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPledgeSelectFieldsResponse {
    loanAppPledge: LoanAppPledge;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
