import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrPersonCtrTranInfoSingleSelectableFields } from "./ctrPersonCtrTranInfoSingleSelectableFields";
import { CtrPersonCtrTranInfoSearchFilter } from "./ctrPersonCtrTranInfoSearchFilter";
import { VersionType } from "./versionType";
export interface CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrPersonCtrTranInfoSingleSelectableFields;
    searchFilter: CtrPersonCtrTranInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
