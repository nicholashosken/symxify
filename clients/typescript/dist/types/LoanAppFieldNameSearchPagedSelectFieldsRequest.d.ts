import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppFieldNameSingleSelectableFields } from "./loanAppFieldNameSingleSelectableFields";
import { LoanAppFieldNameSearchFilter } from "./loanAppFieldNameSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppFieldNameSingleSelectableFields;
    searchFilter: LoanAppFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
