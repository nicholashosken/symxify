import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DivIndexLocalSingleSelectableFields } from "./divIndexLocalSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DivIndexLocalPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DivIndexLocalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}