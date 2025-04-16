import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentBillingPagedListSelectFieldsResponse {
    loanLnSegmentBilling: LoanLnSegmentBilling[];
    loanLnSegmentBillingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
