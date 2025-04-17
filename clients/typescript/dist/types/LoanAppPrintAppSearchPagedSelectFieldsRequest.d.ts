import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPrintAppSingleSelectableFields } from "./loanAppPrintAppSingleSelectableFields";
import { LoanAppPrintAppSearchFilter } from "./loanAppPrintAppSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppPrintAppSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPrintAppSingleSelectableFields;
    searchFilter: LoanAppPrintAppSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
