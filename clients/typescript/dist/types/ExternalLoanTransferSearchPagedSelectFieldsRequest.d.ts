import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanTransferSingleSelectableFields } from "./externalLoanTransferSingleSelectableFields";
import { ExternalLoanTransferSearchFilter } from "./externalLoanTransferSearchFilter";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferSearchPagedSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanTransferSingleSelectableFields;
    searchFilter: ExternalLoanTransferSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
