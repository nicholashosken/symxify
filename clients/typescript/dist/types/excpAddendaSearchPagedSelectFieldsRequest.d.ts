import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddendaSingleSelectableFields } from "./excpAddendaSingleSelectableFields";
import { ExcpAddendaSearchFilter } from "./excpAddendaSearchFilter";
import { VersionType } from "./versionType";
export interface ExcpAddendaSearchPagedSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddendaSingleSelectableFields;
    searchFilter: ExcpAddendaSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
