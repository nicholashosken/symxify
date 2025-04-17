import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanNameSingleSelectableFields } from "./externalLoanNameSingleSelectableFields";
import { ExternalLoanNameSearchFilter } from "./externalLoanNameSearchFilter";
import { VersionType } from "./versionType";
export interface ExternalLoanNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanNameSingleSelectableFields;
    searchFilter: ExternalLoanNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
