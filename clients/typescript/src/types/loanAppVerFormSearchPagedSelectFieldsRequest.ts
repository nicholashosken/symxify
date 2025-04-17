import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppVerFormSingleSelectableFields } from "./loanAppVerFormSingleSelectableFields";
import { LoanAppVerFormSearchFilter } from "./loanAppVerFormSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppVerFormSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppVerFormSingleSelectableFields;
    searchFilter: LoanAppVerFormSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}