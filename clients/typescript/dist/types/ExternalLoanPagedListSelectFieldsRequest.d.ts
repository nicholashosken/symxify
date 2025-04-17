import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalLoanSingleSelectableFields } from "./externalLoanSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalLoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
