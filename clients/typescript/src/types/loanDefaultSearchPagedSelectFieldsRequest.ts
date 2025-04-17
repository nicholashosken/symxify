import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanDefaultSingleSelectableFields } from "./loanDefaultSingleSelectableFields";
import { LoanDefaultSearchFilter } from "./loanDefaultSearchFilter";
import { VersionType } from "./versionType";

export interface LoanDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanDefaultSingleSelectableFields;
    searchFilter: LoanDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}