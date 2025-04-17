import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanBillingSingleSelectableFields } from "./loanBillingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanBillingPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanBillingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}