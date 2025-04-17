import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanCheckOrderSingleSelectableFields } from "./loanCheckOrderSingleSelectableFields";
import { LoanCheckOrderSearchFilter } from "./loanCheckOrderSearchFilter";
import { VersionType } from "./versionType";

export interface LoanCheckOrderSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanCheckOrderSingleSelectableFields;
    searchFilter: LoanCheckOrderSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}