import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanNameSingleSelectableFields } from "./loanNameSingleSelectableFields";
import { LoanNameSearchFilter } from "./loanNameSearchFilter";
import { VersionType } from "./versionType";

export interface LoanNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanNameSingleSelectableFields;
    searchFilter: LoanNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}