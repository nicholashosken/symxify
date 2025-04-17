import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTypeIdRangeSingleSelectableFields } from "./loanTypeIdRangeSingleSelectableFields";
import { LoanTypeIdRangeSearchFilter } from "./loanTypeIdRangeSearchFilter";
import { VersionType } from "./versionType";
export interface LoanTypeIdRangeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTypeIdRangeSingleSelectableFields;
    searchFilter: LoanTypeIdRangeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
