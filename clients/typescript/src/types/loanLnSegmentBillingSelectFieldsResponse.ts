import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanLnSegmentBillingSelectFieldsResponse {
    loanLnSegmentBilling: LoanLnSegmentBilling;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}