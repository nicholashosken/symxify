import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanTransferSingleSelectableFields } from "./externalLoanTransferSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanTransferPagedListSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
