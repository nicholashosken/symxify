import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareNameSingleSelectableFields } from "./shareNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareNamePagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}