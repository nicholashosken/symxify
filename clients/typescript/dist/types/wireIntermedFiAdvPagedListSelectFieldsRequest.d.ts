import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireIntermedFiAdvSingleSelectableFields } from "./wireIntermedFiAdvSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireIntermedFiAdvPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireIntermedFiAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
