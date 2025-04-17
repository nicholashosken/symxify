import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppTrackingSingleSelectableFields } from "./loanAppTrackingSingleSelectableFields";
import { LoanAppTrackingSearchFilter } from "./loanAppTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppTrackingSingleSelectableFields;
    searchFilter: LoanAppTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}