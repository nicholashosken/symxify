import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WorkFlowRepGenSingleSelectableFields } from "./workFlowRepGenSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WorkFlowRepGenPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WorkFlowRepGenSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}