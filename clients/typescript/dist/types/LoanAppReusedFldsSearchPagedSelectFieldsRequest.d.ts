import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppReusedFldsSingleSelectableFields } from "./loanAppReusedFldsSingleSelectableFields";
import { LoanAppReusedFldsSearchFilter } from "./loanAppReusedFldsSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppReusedFldsSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppReusedFldsSingleSelectableFields;
    searchFilter: LoanAppReusedFldsSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
