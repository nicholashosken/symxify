import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanScheduleSingleSelectableFields } from "./loanScheduleSingleSelectableFields";
import { LoanScheduleSearchFilter } from "./loanScheduleSearchFilter";
import { VersionType } from "./versionType";
export interface LoanScheduleSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanScheduleSingleSelectableFields;
    searchFilter: LoanScheduleSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
