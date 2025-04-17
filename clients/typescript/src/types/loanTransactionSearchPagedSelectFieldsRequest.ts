import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTransactionSingleSelectableFields } from "./loanTransactionSingleSelectableFields";
import { LoanTransactionSearchFilter } from "./loanTransactionSearchFilter";
import { VersionType } from "./versionType";

export interface LoanTransactionSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTransactionSingleSelectableFields;
    searchFilter: LoanTransactionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}