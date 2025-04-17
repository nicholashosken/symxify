import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTransactionSingleSelectableFields } from "./shareTransactionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareTransactionPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTransactionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
