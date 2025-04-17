import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBillingSingleSelectableFields } from "./loanBillingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanBillingSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanBillingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanBillingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}