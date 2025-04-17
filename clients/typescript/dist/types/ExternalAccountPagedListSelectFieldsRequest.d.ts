import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExternalAccountSingleSelectableFields } from "./externalAccountSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalAccountPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExternalAccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
