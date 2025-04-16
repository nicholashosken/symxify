import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentBillingFields_2 } from "./loanLnSegmentBillingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanLnSegmentBillingByIdRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    loanLnSegmentBillingLocatorValue: number;
    loanLnSegmentBillingLocatorValueSpecified: boolean;
    loanLnSegmentBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanLnSegmentBillingFields: LoanLnSegmentBillingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}