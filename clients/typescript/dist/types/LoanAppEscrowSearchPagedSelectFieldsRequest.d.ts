import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppEscrowSingleSelectableFields } from "./loanAppEscrowSingleSelectableFields";
import { LoanAppEscrowSearchFilter } from "./loanAppEscrowSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppEscrowSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppEscrowSingleSelectableFields;
    searchFilter: LoanAppEscrowSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
