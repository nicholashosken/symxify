import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireServiceMessageSingleSelectableFields } from "./wireServiceMessageSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireServiceMessagePagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireServiceMessageSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}