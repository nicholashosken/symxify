import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ApWorkFlowSingleSelectableFields } from "./apWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ApWorkFlowPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ApWorkFlowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
