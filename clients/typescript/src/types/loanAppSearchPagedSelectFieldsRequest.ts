import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppSingleSelectableFields } from "./loanAppSingleSelectableFields";
import { LoanAppSearchFilter } from "./loanAppSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppSingleSelectableFields;
    searchFilter: LoanAppSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}