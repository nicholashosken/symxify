import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddInfoSingleSelectableFields } from "./excpAddInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExcpAddInfoPagedListSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
