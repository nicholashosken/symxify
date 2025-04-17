import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanSingleSelectableFields } from "./loanSingleSelectableFields";
import { LoanSearchFilter } from "./loanSearchFilter";
import { VersionType } from "./versionType";
export interface LoanSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanSingleSelectableFields;
    searchFilter: LoanSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
