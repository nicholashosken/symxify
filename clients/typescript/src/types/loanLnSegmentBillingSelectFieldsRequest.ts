import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanLnSegmentBillingSingleSelectableFields } from "./loanLnSegmentBillingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanLnSegmentBillingSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    loanLnSegmentBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanLnSegmentBillingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}