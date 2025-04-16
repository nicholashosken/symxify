import { LoanBilling } from "./loanBilling";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBillingSelectFieldsResponse {
    loanBilling: LoanBilling;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}