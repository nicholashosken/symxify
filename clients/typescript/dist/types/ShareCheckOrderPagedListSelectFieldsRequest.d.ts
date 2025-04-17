import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareCheckOrderSingleSelectableFields } from "./shareCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareCheckOrderPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareCheckOrderSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
