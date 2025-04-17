import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanEscrowSingleSelectableFields } from "./loanEscrowSingleSelectableFields";
import { LoanEscrowSearchFilter } from "./loanEscrowSearchFilter";
import { VersionType } from "./versionType";
export interface LoanEscrowSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanEscrowSingleSelectableFields;
    searchFilter: LoanEscrowSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
