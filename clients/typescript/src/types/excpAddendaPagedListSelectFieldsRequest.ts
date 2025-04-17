import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddendaSingleSelectableFields } from "./excpAddendaSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExcpAddendaPagedListSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddendaSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}