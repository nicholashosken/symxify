import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppViewAppSingleSelectableFields } from "./loanAppViewAppSingleSelectableFields";
import { LoanAppViewAppSearchFilter } from "./loanAppViewAppSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppViewAppSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppViewAppSingleSelectableFields;
    searchFilter: LoanAppViewAppSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
