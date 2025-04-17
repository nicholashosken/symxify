import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppDefaultSingleSelectableFields } from "./loanAppDefaultSingleSelectableFields";
import { LoanAppDefaultSearchFilter } from "./loanAppDefaultSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppDefaultSingleSelectableFields;
    searchFilter: LoanAppDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
