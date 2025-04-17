import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanSingleSelectableFields } from "./externalLoanSingleSelectableFields";
import { ExternalLoanSearchFilter } from "./externalLoanSearchFilter";
import { VersionType } from "./versionType";
export interface ExternalLoanSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanSingleSelectableFields;
    searchFilter: ExternalLoanSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
