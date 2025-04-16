import { LoanPledgeName } from "./loanPledgeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeNameSelectFieldsResponse {
    loanPledgeName: LoanPledgeName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}