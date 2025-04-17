import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanHoldSingleSelectableFields } from "./loanHoldSingleSelectableFields";
import { LoanHoldSearchFilter } from "./loanHoldSearchFilter";
import { VersionType } from "./versionType";

export interface LoanHoldSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanHoldSingleSelectableFields;
    searchFilter: LoanHoldSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}