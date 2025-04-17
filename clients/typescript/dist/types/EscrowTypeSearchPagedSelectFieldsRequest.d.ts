import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EscrowTypeSingleSelectableFields } from "./escrowTypeSingleSelectableFields";
import { EscrowTypeSearchFilter } from "./escrowTypeSearchFilter";
import { VersionType } from "./versionType";
export interface EscrowTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EscrowTypeSingleSelectableFields;
    searchFilter: EscrowTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
