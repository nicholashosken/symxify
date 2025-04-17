import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TrackingSingleSelectableFields } from "./trackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TrackingPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}