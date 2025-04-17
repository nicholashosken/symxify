import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrPersonCtrTranInfoSingleSelectableFields } from "./ctrPersonCtrTranInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CtrPersonCtrTranInfoPagedListSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrPersonCtrTranInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
