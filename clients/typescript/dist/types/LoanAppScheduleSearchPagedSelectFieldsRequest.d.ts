import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppScheduleSingleSelectableFields } from "./loanAppScheduleSingleSelectableFields";
import { LoanAppScheduleSearchFilter } from "./loanAppScheduleSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppScheduleSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppScheduleSingleSelectableFields;
    searchFilter: LoanAppScheduleSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
