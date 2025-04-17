import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTrackingSingleSelectableFields } from "./loanTrackingSingleSelectableFields";
import { LoanTrackingSearchFilter } from "./loanTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface LoanTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTrackingSingleSelectableFields;
    searchFilter: LoanTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}