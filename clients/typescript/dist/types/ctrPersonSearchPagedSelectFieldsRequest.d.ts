import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrPersonSingleSelectableFields } from "./ctrPersonSingleSelectableFields";
import { CtrPersonSearchFilter } from "./ctrPersonSearchFilter";
import { VersionType } from "./versionType";
export interface CtrPersonSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrPersonSingleSelectableFields;
    searchFilter: CtrPersonSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
