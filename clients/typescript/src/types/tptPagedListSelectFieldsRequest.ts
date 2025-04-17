import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TptSingleSelectableFields } from "./tptSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TptPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TptSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}