import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireUscAuditInfoSingleSelectableFields } from "./wireUscAuditInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireUscAuditInfoPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireUscAuditInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
