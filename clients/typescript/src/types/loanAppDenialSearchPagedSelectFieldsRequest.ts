import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppDenialSingleSelectableFields } from "./loanAppDenialSingleSelectableFields";
import { LoanAppDenialSearchFilter } from "./loanAppDenialSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppDenialSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppDenialSingleSelectableFields;
    searchFilter: LoanAppDenialSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}