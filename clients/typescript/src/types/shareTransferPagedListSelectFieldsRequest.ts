import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTransferSingleSelectableFields } from "./shareTransferSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareTransferPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}