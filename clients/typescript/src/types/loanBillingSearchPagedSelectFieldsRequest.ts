import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanBillingSingleSelectableFields } from "./loanBillingSingleSelectableFields";
import { LoanBillingSearchFilter } from "./loanBillingSearchFilter";
import { VersionType } from "./versionType";

export interface LoanBillingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanBillingSingleSelectableFields;
    searchFilter: LoanBillingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}