import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireUscAuditInfoSingleSelectableFields } from "./wireUscAuditInfoSingleSelectableFields";
import { WireUscAuditInfoSearchFilter } from "./wireUscAuditInfoSearchFilter";
import { VersionType } from "./versionType";

export interface WireUscAuditInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireUscAuditInfoSingleSelectableFields;
    searchFilter: WireUscAuditInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}