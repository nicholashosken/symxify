import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CredRepItemSingleSelectableFields } from "./credRepItemSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CredRepItemPagedListSelectFieldsRequest {
    accountNumber: string;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CredRepItemSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
