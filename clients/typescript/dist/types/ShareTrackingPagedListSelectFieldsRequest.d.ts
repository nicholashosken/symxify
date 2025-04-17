import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTrackingSingleSelectableFields } from "./shareTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareTrackingPagedListSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
