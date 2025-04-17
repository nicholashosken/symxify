import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireServiceMessageSingleSelectableFields } from "./wireServiceMessageSingleSelectableFields";
import { WireServiceMessageSearchFilter } from "./wireServiceMessageSearchFilter";
import { VersionType } from "./versionType";
export interface WireServiceMessageSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireServiceMessageSingleSelectableFields;
    searchFilter: WireServiceMessageSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
