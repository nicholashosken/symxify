import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EscrowTypeSingleSelectableFields } from "./escrowTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EscrowTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EscrowTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
