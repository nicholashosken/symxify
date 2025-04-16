import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentBillingSingleSelectableFields } from "./loanLnSegmentBillingSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentBillingSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    loanLnSegmentBillingLocatorValue: number;
    loanLnSegmentBillingLocatorValueSpecified: boolean;
    loanLnSegmentBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanLnSegmentBillingSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
