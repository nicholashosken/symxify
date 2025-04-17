import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireIntermedFiInfoSingleSelectableFields } from "./wireIntermedFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireIntermedFiInfoPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireIntermedFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
