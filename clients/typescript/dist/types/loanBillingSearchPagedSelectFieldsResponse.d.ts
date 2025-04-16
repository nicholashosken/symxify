import { LoanBilling } from "./loanBilling";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBillingSearchPagedSelectFieldsResponse {
    loanBilling: LoanBilling[];
    loanBillingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
