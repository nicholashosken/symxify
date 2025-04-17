import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTypeIdRangeSingleSelectableFields } from "./loanTypeIdRangeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanTypeIdRangePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTypeIdRangeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
