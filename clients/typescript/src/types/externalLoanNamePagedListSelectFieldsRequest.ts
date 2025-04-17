import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanNameSingleSelectableFields } from "./externalLoanNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExternalLoanNamePagedListSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}