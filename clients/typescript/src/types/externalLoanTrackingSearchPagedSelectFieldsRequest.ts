import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanTrackingSingleSelectableFields } from "./externalLoanTrackingSingleSelectableFields";
import { ExternalLoanTrackingSearchFilter } from "./externalLoanTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface ExternalLoanTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanTrackingSingleSelectableFields;
    searchFilter: ExternalLoanTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}