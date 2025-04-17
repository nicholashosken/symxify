import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardDefaultSingleSelectableFields } from "./cardDefaultSingleSelectableFields";
import { CardDefaultSearchFilter } from "./cardDefaultSearchFilter";
import { VersionType } from "./versionType";
export interface CardDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardDefaultSingleSelectableFields;
    searchFilter: CardDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
