import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireFiToFiInfoSingleSelectableFields } from "./wireFiToFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireFiToFiInfoPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireFiToFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}